<template>
  <div>
    <button @click="sendMessage()">click</button>

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
import axios from "axios";

export default defineComponent({
  name: "Home",
  data() {
    return {
      nbPlayer: 0,
      lieu: "",
      messages: [],
      socket: io("localhost:3000"),
    };
  },
  methods: {
    async sendMessage() {
      this.socket.emit("chat message", "coucou");
      this.message = "";
    },
  },
});
</script>
