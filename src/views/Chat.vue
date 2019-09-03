<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}:&nbsp;</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp | date }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

import NewMessage from '@/components/NewMessage'

export default {
  props: ['name'],
  data() {
    return {
      messages: []
    }
  },
  components: {
    NewMessage
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        // console.log(change)
        if (change.type == 'added') {
          let doc = change.doc
          const { name, content, timestamp } = doc.data()
          // console.log(doc.data())
          this.messages.push({
            id: doc.id,
            name,
            content,
            timestamp
          })
        }
      })
    })
  }
}
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 1.2em;
}
.messages {
  max-height: 500px;
  overflow: auto;
}
</style>
