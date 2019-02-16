<template lang="pug">
  .column.is-4-tablet.is-3-widescreen
    .card
      .card-image
        a( href="https://satokibi.github.io/line-todo-app/" target="_blank" )
          img( src="@/assets/todo.png" class="image")
        div.content
          div.tags
            span
              a( href="https://developers.line.biz/ja/" target="_blank" )
                img( src="@/assets/line.png" )
            span
              a( href="https://rubyonrails.org/" target="_blank" )
                img( src="@/assets/rails.png" )
          a( href="https://satokibi.github.io/line-todo-app/" target="_blank" )
            p.title-text.has-text-grey-dark Todo管理bot
          p.description Line Messaging API + Railsで開発したToDo管理bot。是非、友達登録して使ってみてください...!
          div.link
            a( href="https://github.com/satokibi/line-todo-app" target="_blank" )
              i( class="fab fa-github" )
            a( href="https://satokibi.github.io/line-todo-app/" target="_blank" )
              i( class="fas fa-external-link-alt" )
</template>