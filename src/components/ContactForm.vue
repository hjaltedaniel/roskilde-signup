<template>
<div class="modal" :class="{ 'is-active': active }">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g Alex Smith">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button class="button is-link">Send besked og åben People</button>
      </div>
    </div>

  </div>
  <button class="modal-close is-large" v-on:click="closeModal(false)" aria-label="close"></button>
</div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    form: Object,
    active: Boolean,
    peopleLink: String,
    selectedTeam: String
  },
  methods: {
      closeModal(e) {
        this.$emit('closeModal', e)
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-content {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
}
</style>
