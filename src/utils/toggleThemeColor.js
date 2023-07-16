import { themeRootColors } from 'styles/themeColor';

const toggleTheme = toggle => {
  const {
    backTheme1Color,
    backTheme2Color,
    headTheme1Color,
    textTheme1Color,
    textTheme2Color,
    textSecondTheme1Color,
    selectBackTheme1,
    activeTheme1,
    activeTheme2,
    selectTextTheme1,
    categoryTheme1,
  } = themeRootColors;

  if (toggle) {
    document.documentElement.style.setProperty('--back_theme_1', backTheme1Color);
    document.documentElement.style.setProperty('--text_theme_1', textTheme1Color);
    document.documentElement.style.setProperty('--head_theme_1', headTheme1Color);
    document.documentElement.style.setProperty('--text_second_theme_1', textSecondTheme1Color);
    document.documentElement.style.setProperty('--back_theme_2', backTheme2Color);
    document.documentElement.style.setProperty('--text_theme_2', textTheme2Color);
    document.documentElement.style.setProperty('--selectBack_theme_1', selectBackTheme1);
    document.documentElement.style.setProperty('--active', activeTheme1);
    document.documentElement.style.setProperty('--active_theme_2', activeTheme2);
    document.documentElement.style.setProperty('--active_select_1', backTheme1Color);
    document.documentElement.style.setProperty('--select_text_1', selectTextTheme1);
    document.documentElement.style.setProperty('--category_theme_1', categoryTheme1);
  } else {
    document.documentElement.style.setProperty('--back_theme_1', backTheme2Color);
    document.documentElement.style.setProperty('--text_theme_1', textTheme2Color);
    document.documentElement.style.setProperty('--head_theme_1', backTheme1Color);
    document.documentElement.style.setProperty('--back_theme_2', backTheme1Color);
    document.documentElement.style.setProperty('--text_theme_2', textTheme1Color);
    document.documentElement.style.setProperty('--text_second_theme_1', backTheme1Color);
    document.documentElement.style.setProperty('--selectBack_theme_1', backTheme1Color);
    document.documentElement.style.setProperty('--active', activeTheme2);
    document.documentElement.style.setProperty('--active_select_1', activeTheme1);
    document.documentElement.style.setProperty('--active_theme_2', activeTheme1);
    document.documentElement.style.setProperty('--select_text_1', backTheme1Color);
    document.documentElement.style.setProperty('--category_theme_1', textTheme2Color);
  }
};

export { toggleTheme };
