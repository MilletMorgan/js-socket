<template>
  <div>
    <input type="text" v-model="msgToSend">
    <button @click="sendMessage">Envoyé le message au serveur</button>
    <br><br>
    Message du serveur: {{ messageReceived }}

    <h1>Configuration partie</h1>
    <form>
      <label>
        Nb player
        <br/>
        <input type="number" v-model="nbPlayer" name="nbPlayer"/>
      </label>

      <br/><br/>

      <label>
        Lieu
        <br/>
        <input type="text" v-model="lieu" name="lieu"/>
      </label>

      <br/><br/>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import io from "socket.io-client";

export default defineComponent({
  name: "Home",
  data() {
    return {
      nbPlayer: 0,
      lieu: "",
      messageReceived: "",
      socket: io("localhost:3000"),
      msgToSend: "",
    };
  },
  methods: {
    async sendMessage() {
      this.socket.emit("send message", this.msgToSend);

      this.socket.on("get message", (msg) => {
        this.messageReceived = msg;
      });
    },
  },
});
</script>
