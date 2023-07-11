import styled from 'styled-components';

// const mobile = '375px';
const { tablet } = '768px';
const { desktop } = '1440px';

// * Блок перемикання теми
const Theme = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: (${{ tablet }} - 1px)) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: ${tablet}) {
    margin-left: 24px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-left: 147px;
  }
`;

// ~ Кнопка перемикання теми
const ThemeBtn = styled.span`
  display: flex; // прибирає 4px знизу
  align-items: center;
  padding: 0;

  background-color: transparent;
  border: none;
  border-radius: 20px;
`;

// & Перемикач малюється за допомогою css (copy-paste from https://codepen.io/mburnette/pen/LxNxNg):
const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: var(--brand-main-opt);
  }

  &:checked + .switch-lbl:after {
    left: calc(100% - 2px); // позиція праворуч
    translate: -100% 0%; // переміщення праворуч

    // розмір коли коло праворуч (біле) зменшено на 1px:
    width: 13px;
    height: 13px;
  }
`;

const SwitchLbl = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  // text-indent: -9999px; // потрібен щоб сховати текст у label.switch-lbl
  width: 40px;
  height: 20px;
  margin-right: 12px;

  background-color: var(--brand-light);
  // border: 1px solid var(--theme-tgl-bg); // бордер по розмиітці
  border: 1.5px solid var(--theme-tgl-bg); // бордер збільшений на 0.5px
  border-radius: 20px;

  &:after {
    content: '';
    position: absolute;

    // центрування по -y
    top: 50%;
    transform: translateY(-50%);

    // left: 1px; // позиція ліворуч по розмітці
    left: 1.5px; // позиція ліворуч

    // розмір коли коло ліворуч (синє):
    width: 14px;
    height: 14px;

    background-color: var(--theme-tgl-bg);
    border-radius: 20px;

    transition: 250ms;
  }
`;
// &/ Перемикач малюється за допомогою css (copy-paste)
// ~/ Кнопка перемикання теми
// */ Блок перемикання теми

// * Зміна теми перемиканням класу dark-them
const themeSwitch = document.getElementById('switch');
console.log('themeSwitch:', themeSwitch);
// themeSwitch.addEventListener('click', changeTheme2);

// function changeTheme2() {
//   document.body.classList.toggle('dark-theme');
//   // + додати ключ у local storage по body.dark-theme
//   if (localStorage.getItem('theme') !== 'dark') {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.removeItem('theme');
//   }
// }
// */ Зміна теми перемиканням класу dark-them

// function addDarkClassToHTML() {
//   try {
//     if (localStorage.getItem('theme') === 'dark') {
//       document.body.classList.add('dark-theme');
//       themeSwitch.checked = true;
//     }
//   } catch (err) {}
// }

// addDarkClassToHTML();

export { Theme, ThemeBtn, SwitchInput, SwitchLbl };
