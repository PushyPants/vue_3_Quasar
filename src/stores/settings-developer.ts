import { defineStore } from 'pinia';

export const useDeveloperSettingsStore = defineStore('DeveloperSettingsStore', {
  state() {
    return {
      useAuthentication: false,
      useSocket: false,
      useSocketLocalServer: false,
    };
  },
  getters: {
    useAuthentication: (state) => state.useAuthentication,
    useSocket: (state) => state.useSocket,
    useSocketLocalServer: (state) => state.useSocketLocalServer,
  },
  actions: {
    toggleUseAuthentication() {
      this.useAuthentication = !this.useAuthentication;
    },
    toggleUseSocket() {
      this.useSocket = !this.useSocket;
    },
    toggleUseSocketLocalServer() {
      this.useSocketLocalServer = !this.useSocketLocalServer;
    },
  },
});
