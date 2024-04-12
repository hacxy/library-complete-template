// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!(import.meta as any).env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        primaryColor: 'pink',
        models: [
          {
            path: 'https://model.oml2d.com/HK416-1-normal/model.json',
            position: [0, 70],
            scale: 0.07,
            stageStyle: {
              height: 400
            }
          }
        ],
        tips: {
          idleTips: {
            wordTheDay: (data) => {
              return data.hitokoto;
            }
          }
        }
      });
    }
  }
};
