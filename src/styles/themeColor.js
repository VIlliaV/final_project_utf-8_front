const rootStyles = getComputedStyle(document.documentElement);

// const primaryColor = rootStyles.getPropertyValue('--primary');
const backTheme1Color = rootStyles.getPropertyValue('--back_theme_1');
const backTheme2Color = rootStyles.getPropertyValue('--back_theme_2');
const headTheme2Color = rootStyles.getPropertyValue('--head_theme_2');
const textTheme1Color = rootStyles.getPropertyValue('--text_theme_1');
const textTheme2Color = rootStyles.getPropertyValue('--text_theme_2');
const textSecondTheme1Color = rootStyles.getPropertyValue('--text_second_theme_1');

export const toggleTheme_1 = () => {
  document.documentElement.style.setProperty('--back_theme_1', backTheme1Color);
  document.documentElement.style.setProperty('--text_theme_1', textTheme1Color);
  document.documentElement.style.setProperty('--head_theme_1', headTheme2Color);
  document.documentElement.style.setProperty('--text_second_theme_1', textSecondTheme1Color);
  document.documentElement.style.setProperty('--back_theme_2', backTheme2Color);
  document.documentElement.style.setProperty('--text_theme_2', textTheme2Color);
  document.documentElement.style.setProperty('--text_second_theme_1', textSecondTheme1Color);
};

export const toggleTheme_2 = () => {
  document.documentElement.style.setProperty('--back_theme_1', backTheme2Color);
  document.documentElement.style.setProperty('--text_theme_1', textTheme2Color);
  document.documentElement.style.setProperty('--head_theme_1', backTheme1Color);
  document.documentElement.style.setProperty('--back_theme_2', backTheme1Color);
  document.documentElement.style.setProperty('--text_theme_2', textTheme1Color);
  document.documentElement.style.setProperty('--text_second_theme_1', backTheme1Color);
};
