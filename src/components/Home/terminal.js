import login_input from '@/components/Home/home_terminal_login.vue'

export default {
  name: 'terminal',
  components: {
    login_input
  },
  data: function () {
    return {
      current_line: "",
      history: [],
      index: 0,
      interval: 500,
      login_flag: false,
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
    this.terminalInit();
  },
  methods: {
    command: function () {
      this.history_push('[~]# ' + this.current_line);

      var args = this.current_line.split(/\s+/);
      if (this.current_line === 'clear') {
        this.history = [];
      }
      else if (this.current_line === 'ls') {
        this.history_push('q1.txt');
      }
      else if (args[0] === 'cat') {
        if(args[1] == 'q1.txt') {
          this.history_push('hello');
        } else {
          this.history_push(args[0] + ': ' + args[1] + ': No such file or directory');
        }
      }
      else if (this.current_line === 'exit') {
        this.history_push('logout');
        this.login_flag = false;
      }
      else if (this.current_line !== '') {
        this.history_push(this.current_line + ': command not found');
      }
      this.current_line = '';
    },
    terminalFocus: function () {
      document.getElementById('terminal-input').focus();
    },
    terminalInit: function () {
      this.history_push(this.terminal_init_messages[this.index]);
      this.current_line = '';
      this.interval = Math.random() * 100;
      this.index++;
      if (this.index < this.terminal_init_messages.length) {
        setTimeout(this.terminalInit, this.interval)
      } else {
        this.history = [];
        for (var i = 0; i < this.login_messages.length; i++) {
          this.history_push(this.login_messages[i]);
        }
      }
    },
    loginCorrect: function () {
      this.login_flag = true;
    },
    history_push: function (str) {
      this.history.push(str);
      if (this.history.length > 14) {
        this.history = this.history.slice(-14);
      }
    }
  }
}