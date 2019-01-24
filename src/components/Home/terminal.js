import login_input from '@/components/Home/home_terminal_login.vue'

export default {
  name: 'terminal',
  components: {
    login_input
  },

  data: function () {
    return {
      index: 0,
      interval: 500,
      terminal_init_messages: [
        'Initializing ...',
        'site version 0.11 2019 Saturday 19 January 08:35 a.m. JST',
        window.navigator.language,
        window.navigator.userAgent,
      ],
      login_messages: [
        '　',
        'site ver 0.11',
        'Welcome',
        '　',
      ]
    }
  },

  created: function () {
    if(this.initState === false) {
      this.terminalInit();
    }
    window.addEventListener('keydown', this.terminalFocus);
  },

  beforeDestroy: function() {
    window.removeEventListener('keydown', this.terminalFocus);
  },

  computed: {
    initState: function () {
      return this.$store.getters.getInitFlag;
    },
    loginState: function () {
      return this.$store.getters.getLoginFlag;
    },
    currentLine: {
      get() {
        return this.$store.getters.getCurrentLine;
      },
      set(str) {
        this.$store.commit('updateCurrentLine', str)
      }
    },
    history: function () {
      return this.$store.getters.getHistory;
    },
  },

  methods: {
    command: function () {
      var current_line = this.$store.getters.getCurrentLine
      this.$store.commit('pushHistory', '[~]# ' + current_line);

      var args = current_line.split(/\s+/);
      if (current_line === 'clear') {
        this.$store.commit('clearHistory');
      }
      else if (current_line === 'ls') {
        this.$store.commit('pushHistory', 'q1.txt');
      }
      else if (args[0] === 'cat') {
        if (args[1] == 'q1.txt') {
          this.$store.commit('pushHistory', 'hello');
        } else {
          this.$store.commit('pushHistory', args[0] + ': ' + args[1] + ': No such file or directory');
        }
      }
      else if (current_line === 'exit') {
        this.$store.commit('pushHistory', 'logout');
        this.$store.commit('logout');
      }
      else if (current_line !== '') {
        this.$store.commit('pushHistory', current_line + ': command not found');
      }
      this.$store.commit('updateCurrentLine', '')
    },

    terminalFocus: function () {
      document.getElementById('terminal-input').focus();
    },

    terminalInit: function () {
      this.$store.commit('pushHistory', this.terminal_init_messages[this.index]);
      this.$store.commit('updateCurrentLine', '')
      this.interval = Math.random() * 100;
      this.index++;
      if (this.index < this.terminal_init_messages.length) {
        setTimeout(this.terminalInit, this.interval)
      } else {
        this.$store.commit('clearHistory');
        for (var i = 0; i < this.login_messages.length; i++) {
          this.$store.commit('pushHistory', this.login_messages[i]);
        }
        this.$store.commit('finishInit')
      }
    },
  }

}