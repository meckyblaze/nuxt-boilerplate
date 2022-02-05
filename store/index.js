import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({
  isCompression: false,
  encodingType: 'aes',
  encryptionSecret: 'Nuxt'
});

// noinspection JSUnusedGlobalSymbols
export const plugins = [
  createPersistedState({
    key: 'Nuxt',
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    }
  })
];