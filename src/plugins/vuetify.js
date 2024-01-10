import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from "vuetify";
import { aliases, fa } from 'vuetify/iconsets/fa'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});

export default vuetify;
