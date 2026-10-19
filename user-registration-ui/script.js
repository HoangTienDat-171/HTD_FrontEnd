/**
 * UI/UX Interaction & Logic Engine
 * Student: Hoàng Tiến Đạt
 * Course: CodeGym Front-End Development
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements - Navigation & Modes
  const switchBtns = document.querySelectorAll('.switch-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Quick State Switchers
  const togglePage1Btn = document.getElementById('toggle-to-page1');
  const togglePage2Btn = document.getElementById('toggle-to-page2');
  const pageRegister = document.getElementById('page-register');
  const pageConfirmation = document.getElementById('page-confirmation');

  // Form Fields & Controls
  const regForm = document.getElementById('registration-form');
  const fullnameInput = document.getElementById('fullname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const termsCheckbox = document.getElementById('terms');

  // Password Rules Checklist Elements
  const ruleLength = document.getElementById('rule-length');
  const ruleUpper = document.getElementById('rule-upper');
  const ruleNumber = document.getElementById('rule-number');
  const strengthText = document.getElementById('strength-text');
  const strengthBarContainer = document.querySelector('.strength-bar-container');

  // Show/Hide Password buttons
  const togglePwBtn = document.getElementById('toggle-password');
  const toggleConfirmPwBtn = document.getElementById('toggle-confirm-password');

  // Summary fields on Page 2
  const summaryName = document.getElementById('summary-name');
  const summaryEmail = document.getElementById('summary-email');
  const btnRestartFlow = document.getElementById('btn-restart-flow');
  const btnResendEmail = document.getElementById('btn-resend-email');
  const resendText = document.getElementById('resend-text');
  const btnLoginNow = document.getElementById('btn-login-now');
  const btnPrintScreen = document.getElementById('btn-print-screen');

  // ==========================================
  // 1. TAB & MODE NAVIGATION
  // ==========================================
  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(tab => tab.classList.remove('active-tab'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active-tab');
      }
    });
  });

  // Switch between Register Page (Page 1) and Confirmation Page (Page 2)
  function showPage(pageNumber) {
    if (pageNumber === 1) {
      pageRegister.classList.add('active-page');
      pageConfirmation.classList.remove('active-page');
      togglePage1Btn.classList.add('active');
      togglePage2Btn.classList.remove('active');
    } else {
      pageRegister.classList.remove('active-page');
      pageConfirmation.classList.add('active-page');
      togglePage1Btn.classList.remove('active');
      togglePage2Btn.classList.add('active');
    }
  }

  togglePage1Btn.addEventListener('click', () => showPage(1));
  togglePage2Btn.addEventListener('click', () => showPage(2));

  // ==========================================
  // 2. TOGGLE PASSWORD VISIBILITY (EYE ICON)
  // ==========================================
  function setupPasswordToggle(button, input) {
    button.addEventListener('click', () => {
      const isPassword = input.getAttribute('type') === 'password';
      input.setAttribute('type', isPassword ? 'text' : 'password');
      
      const eyeOpen = button.querySelector('.eye-open');
      const eyeClosed = button.querySelector('.eye-closed');
      if (eyeOpen && eyeClosed) {
        eyeOpen.classList.toggle('hidden', isPassword);
        eyeClosed.classList.toggle('hidden', !isPassword);
      }
    });
  }

  setupPasswordToggle(togglePwBtn, passwordInput);
  setupPasswordToggle(toggleConfirmPwBtn, confirmPasswordInput);

  // ==========================================
  // 3. REAL-TIME VALIDATION HELPERS
  // ==========================================
  function setFieldState(groupId, hintId, isValid, message) {
    const group = document.getElementById(groupId);
    const hint = document.getElementById(hintId);
    if (!group || !hint) return;

    if (isValid === true) {
      group.classList.remove('invalid');
      group.classList.add('valid');
      hint.textContent = message || 'Thông tin hợp lệ';
    } else if (isValid === false) {
      group.classList.remove('valid');
      group.classList.add('invalid');
      hint.textContent = message;
    } else {
      group.classList.remove('valid', 'invalid');
      hint.textContent = message;
    }
  }

  // Full Name Validator
  function validateFullname(showError = false) {
    const value = fullnameInput.value.trim();
    if (!value) {
      if (showError) setFieldState('group-fullname', 'hint-fullname', false, 'Vui lòng nhập họ và tên của bạn.');
      return false;
    }
    const words = value.split(/\s+/);
    if (words.length < 2 || value.length < 4) {
      if (showError) setFieldState('group-fullname', 'hint-fullname', false, 'Vui lòng nhập cả họ và tên (ít nhất 2 từ).');
      return false;
    }
    setFieldState('group-fullname', 'hint-fullname', true, 'Họ và tên hợp lệ ✓');
    return true;
  }

  // Email Validator
  function validateEmail(showError = false) {
    const value = emailInput.value.trim();
    if (!value) {
      if (showError) setFieldState('group-email', 'hint-email', false, 'Vui lòng nhập địa chỉ email.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(value)) {
      if (showError) setFieldState('group-email', 'hint-email', false, 'Địa chỉ email không đúng định dạng (vd: name@example.com).');
      return false;
    }
    setFieldState('group-email', 'hint-email', true, 'Email hợp lệ ✓');
    return true;
  }

  // Password Validator & Strength Meter
  function evaluatePasswordStrength(password) {
    let score = 0;
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password) && /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    // Update Checklist UI
    ruleLength.classList.toggle('met', hasLength);
    ruleUpper.classList.toggle('met', hasUpper);
    ruleNumber.classList.toggle('met', hasNumber);

    if (hasLength) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    // Update Strength Bar & Label
    strengthBarContainer.className = 'strength-bar-container';

    if (password.length === 0) {
      strengthText.textContent = 'Chưa nhập';
      strengthText.style.color = 'var(--text-muted)';
    } else if (score <= 1) {
      strengthBarContainer.classList.add('strength-weak');
      strengthText.textContent = 'Yếu';
      strengthText.style.color = 'var(--error)';
    } else if (score === 2) {
      strengthBarContainer.classList.add('strength-medium');
      strengthText.textContent = 'Trung bình';
      strengthText.style.color = 'var(--warning)';
    } else if (score === 3) {
      strengthBarContainer.classList.add('strength-strong');
      strengthText.textContent = 'Khá mạnh';
      strengthText.style.color = '#3B82F6';
    } else {
      strengthBarContainer.classList.add('strength-very-strong');
      strengthText.textContent = 'Rất mạnh';
      strengthText.style.color = 'var(--success)';
    }

    return { isValid: hasLength && (hasUpper || hasNumber), score };
  }

  function validatePassword(showError = false) {
    const val = passwordInput.value;
    const { isValid } = evaluatePasswordStrength(val);

    if (!val) {
      if (showError) setFieldState('group-password', 'hint-fullname', false);
      return false;
    }

    if (!isValid) {
      if (showError) {
        document.getElementById('group-password').classList.add('invalid');
        document.getElementById('group-password').classList.remove('valid');
      }
      return false;
    } else {
      document.getElementById('group-password').classList.remove('invalid');
      document.getElementById('group-password').classList.add('valid');
      return true;
    }
  }

  // Confirm Password Validator
  function validateConfirmPassword(showError = false) {
    const pw = passwordInput.value;
    const confirmVal = confirmPasswordInput.value;

    if (!confirmVal) {
      if (showError) setFieldState('group-confirm-password', 'hint-confirm', false, 'Vui lòng xác nhận mật khẩu.');
      return false;
    }

    if (confirmVal !== pw) {
      setFieldState('group-confirm-password', 'hint-confirm', false, 'Mật khẩu xác nhận chưa trùng khớp.');
      return false;
    }

    setFieldState('group-confirm-password', 'hint-confirm', true, 'Mật khẩu trùng khớp hoàn toàn ✓');
    return true;
  }

  // Terms Checkbox Validator
  function validateTerms() {
    const checkboxGroup = document.querySelector('.form-checkbox-group');
    if (!termsCheckbox.checked) {
      checkboxGroup.classList.add('has-error');
      return false;
    }
    checkboxGroup.classList.remove('has-error');
    return true;
  }

  // Event Listeners for Live Feedback (UX Realtime Feedback)
  fullnameInput.addEventListener('input', () => validateFullname(false));
  fullnameInput.addEventListener('blur', () => validateFullname(true));

  emailInput.addEventListener('input', () => validateEmail(false));
  emailInput.addEventListener('blur', () => validateEmail(true));

  passwordInput.addEventListener('input', () => {
    evaluatePasswordStrength(passwordInput.value);
    if (confirmPasswordInput.value) {
      validateConfirmPassword(false);
    }
  });
  passwordInput.addEventListener('blur', () => validatePassword(true));

  confirmPasswordInput.addEventListener('input', () => validateConfirmPassword(false));
  confirmPasswordInput.addEventListener('blur', () => validateConfirmPassword(true));

  termsCheckbox.addEventListener('change', validateTerms);

  // ==========================================
  // 4. FORM SUBMISSION (PAGE 1 -> PAGE 2)
  // ==========================================
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateFullname(true);
    const isEmailValid = validateEmail(true);
    const isPwValid = validatePassword(true);
    const isConfirmValid = validateConfirmPassword(true);
    const isTermsValid = validateTerms();

    const allValid = isNameValid && isEmailValid && isPwValid && isConfirmValid && isTermsValid;

    if (!allValid) {
      // Focus on first invalid input (UX Best practice)
      const firstInvalid = document.querySelector('.form-group.invalid input, .form-checkbox-group.has-error input');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // Submit Animation on CTA Button (Fitts' Law feedback)
    const submitBtn = document.getElementById('btn-submit-register');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Đang tạo tài khoản...</span>
    `;

    // Simulated network delay for smooth UX transition
    setTimeout(() => {
      // Fill details in Page 2
      summaryName.textContent = fullnameInput.value.trim();
      summaryEmail.textContent = emailInput.value.trim();

      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Transition to Page 2
      showPage(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  });

  // ==========================================
  // 5. SUCCESS PAGE INTERACTIONS
  // ==========================================
  btnRestartFlow.addEventListener('click', () => {
    regForm.reset();
    document.querySelectorAll('.form-group').forEach(grp => grp.classList.remove('valid', 'invalid'));
    evaluatePasswordStrength('');
    showPage(1);
    fullnameInput.focus();
  });

  btnResendEmail.addEventListener('click', () => {
    btnResendEmail.disabled = true;
    let secondsLeft = 60;
    resendText.textContent = `Đã gửi lại! Vui lòng chờ (${secondsLeft}s)`;

    const timer = setInterval(() => {
      secondsLeft--;
      if (secondsLeft > 0) {
        resendText.textContent = `Đã gửi lại! Vui lòng chờ (${secondsLeft}s)`;
      } else {
        clearInterval(timer);
        btnResendEmail.disabled = false;
        resendText.textContent = 'Gửi lại email xác thực';
      }
    }, 1000);
  });

  btnLoginNow.addEventListener('click', () => {
    alert(`🎉 Đăng nhập thành công với tài khoản: ${summaryEmail.textContent}\nChào mừng bạn đến với khóa học Front-End tại CodeGym!`);
  });

  btnPrintScreen.addEventListener('click', () => {
    alert('📸 Mẹo chụp ảnh nộp bài:\n\n1. Sử dụng tổ hợp phím Windows + Shift + S trên máy tính.\n2. Kéo chọn khu vực Trang 1 (Form đăng ký) và Trang 2 (Xác nhận thành công).\n3. Bạn cũng có thể bấm tab "Bản phác thảo (Wireframe & Flow)" và "Thuyết minh & Ghi chú UI/UX" để chụp bổ sung nhé!');
  });
});
