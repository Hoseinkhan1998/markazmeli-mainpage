import "vuetify/styles";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
    locale: {
    locale: 'fa',
    fallback: 'en',
    messages: { fa },
    rtl: { fa: true }, // مشخص کردن اینکه زبان فارسی راست‌چین است
  },
});

export default vuetify;
