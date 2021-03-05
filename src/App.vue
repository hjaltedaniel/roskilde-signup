<template>
<div class="app">
  <div class="chat">
    <a :href="'mailto:' + allHome.edges[0].node.email">
      <img src="@/assets/chat.svg" />
    </a>
  </div>
  <section class="section language">
    <div class="container">
      <span
        class="text"
        :class="{ 'has-text-weight-bold' : session.language == 'da' }"
        v-on:click="session.language = 'da'"
      >Dansk</span>
      <span class="text">|</span>
      <span
        class="text"
        :class="{ 'has-text-weight-bold' : session.language == 'en-US' }"
        v-on:click="session.language = 'en-US'"
      >English</span>
    </div>
  </section>
  <div class="logo">
    <img :src="allHome.edges[0].node.topImage.url" />
  </div>
  <section class="hero first">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ allHome.edges[0].node.overallHeadline }}</h1>
        <h2
          class="subtitle"
        >{{ allHome.edges[0].node.teaserText }} {{ allTeam.edges[0].node.name }}</h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <TextField
        v-for="(text, index) in allTeam.edges[0].node.type[0].text"
        :key="index"
        :headline="text.headline"
        :text="text.text"
      />
      <div class="field is-grouped is-grouped-centered last">
        <p class="control">
          <a
            :href="allTeam.edges[0].node.link"
            class="button is-link"
            v-on:click="confirmMail(allHome.edges[0].node.rememberEmailText)"
            target="_blank"
          >{{ allHome.edges[0].node.callToActionText}} {{ allTeam.edges[0].node.name }}</a>
        </p>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import TextField from "@/components/TextField.vue";
import gql from 'graphql-tag';

export default {
  name: "app",
  components: {
    TextField
  },
  data() {
    return {
      session: {
        language: "da",
        team: String
      }
    };
  },
  apollo: {
allHome: {
    // gql query
    query: gql`query GetHome($culture: String!) {
  allHome (
    culture:$culture
  ) {
    edges {
      node {
        name
        overallHeadline
        teaserText
        callToActionText
        rememberEmailText
        email
        topImage {
          url
        }
      }
    }
  }
}`,
    // Static parameters
    variables () {
      // Use vue reactive properties here
      return {
          culture: this.session.language
      }
    },
  },
allTeam: {
    // gql query
    query: gql`query GetTeam($teamalias: String!, $culture: String!) {
        allTeam (
    where: {
      shortTeamName: $teamalias
    }
    culture:$culture
  ) {
    edges {
      node {
        name
        shortTeamName
        hours
        link
        type {
          ... on Type {
            name
            text {
              ... on Textfield {
                headline
                text
              }
            }
          }
        }
      }
    }
  }
}`,
    // Static parameters
    variables () {
      // Use vue reactive properties here
      return {
          teamalias: this.session.team,
          culture: this.session.language
      }
    },
  },
  },
  created() {
    this.setTeam();
  },
  methods: {
    setTeam: function() {
      let uri = window.location.search.substring(1);
      let params = new URLSearchParams(uri);
      if (params.get("team") != null) {
        this.session.team = params.get("team");
      } else {
        this.session.team = "general";
      }
    },
    replaceBenefits: function(text, hours, period) {
      let res = text.replace("${hours}", hours);
      let end = res.replace("${period}", period);
      return end;
    },
    confirmMail: function(content) {
      confirm(content);
    }
  }
};
</script>

<style lang="scss">
.chat {
  img {
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 0;
    height: 15%;
  }
}
.logo {
  padding-top: 5rem;
  width: 15rem;
  margin-right: auto;
  margin-left: auto;
}
.last {
  padding-bottom: 40px;
}
.hero-body {
  padding-bottom: 0rem !important;
}
.language {
  padding: 0.5rem 1.5rem !important;
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 1;
  .text {
    padding-right: 0.3rem;
    cursor: pointer;
  }
}
.button {
  background-color: #ee7203 !important;
}
</style>
