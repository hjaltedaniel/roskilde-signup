<template>
  <div>
    <div class="app" v-if="session.team != null">
      <div class="chat">
        <a href="mailto:foodcourt@roskilde-festival.dk">
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
            :class="{ 'has-text-weight-bold' : session.language == 'en' }"
            v-on:click="session.language = 'en'"
          >English</span>
        </div>
      </section>
      <div class="logo">
        <img src="@/assets/logo.svg" />
      </div>
      <section class="hero first">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{ content[session.language].misc.overall }}</h1>
            <h2
              class="subtitle"
            >{{ content[session.language].misc.team }} {{ teams[session.team].name }}</h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <TextField
            :headline="content[session.language].general.headline"
            :text="content[session.language].general.text"
          />
          <TextField
            v-if="teams[session.team].type == 'operations'"
            :headline="content[session.language].operations.headline"
            :text="content[session.language].operations.text"
          />
          <TextField
            v-if="teams[session.team].type == 'dismantling'"
            :headline="content[session.language].dismantling.headline"
            :text="content[session.language].dismantling.text"
          />
          <TextField
            v-if="teams[session.team].type == 'general'"
            :headline="content[session.language].operations.headline + ' ' + content[session.language].misc.operation"
            :text="content[session.language].operations.text"
          />
          <TextField
            v-if="teams[session.team].type == 'general'"
            :headline="content[session.language].operations.headline + ' ' + content[session.language].misc.dismantling"
            :text="content[session.language].dismantling.text"
          />
          <TextField
            :headline="content[session.language].benefits.headline"
            :text="replaceBenefits(content[session.language].benefits.text, teams[session.team].hours, teams[session.team].period[session.language])"
          />
          <TextField
            :headline="content[session.language].signup.headline"
            :text="content[session.language].signup.text"
          />
          <div class="field is-grouped is-grouped-centered last">
            <p class="control">
              <a
                :href="teams[session.team].link"
                class="button is-link"
                v-on:click="confirmMail(content[session.language].misc.rememberEmail)"
                target="_blank"
              >{{ content[session.language].misc.cta }} {{ teams[session.team].name }}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="app" v-else>
      <span
        class="button is-link"
        v-for="(item, key, index) in teams"
        v-on:click="session.team = key"
        :key="index"
      >{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/TextField.vue";
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
      },
      teams: {
        general: {
          type: "general",
          name: "Foodcourt",
          hours: "24-32",
          period: {
            da: "der ligger under (24t) eller efter festivalen (32t)",
            en: "schedueled during (24h) or after the festival (32h)"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=8bc92622-889c-48b2-9cc7-a774f715332a"
        },
        op1a: {
          type: "operations",
          name: "Driftshold 1A",
          hours: "24",
          period: {
            da: "under festivalen",
            en: "during the festival"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=3650162e-c6a9-4568-9a1f-f6aa4f204c36"
        },
        op1b: {
          type: "operations",
          name: "Driftshold 1B",
          hours: "24",
          period: {
            da: "under festivalen",
            en: "during the festival"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=58e9ce6f-8389-4599-8d07-eeb6803ca210"
        },
        op2a: {
          type: "operations",
          name: "Driftshold 2A",
          hours: "24",
          period: {
            da: "under festivalen",
            en: "during the festival"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=7e18f5d5-c0ac-4bcc-b159-79099961c0b7"
        },
        op2b: {
          type: "operations",
          name: "Driftshold 2B",
          hours: "24",
          period: {
            da: "under festivalen",
            en: "during the festival"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=001cfa59-1653-4586-a15c-446606f1dec4"
        },
        op3a: {
          type: "operations",
          name: "Driftshold 3A",
          hours: "24",
          period: {
            da: "under festivalen",
            en: "during the festival"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=60068612-e1f9-4b56-aa75-6dc4972ec39e"
        },
        op3b: {
          type: "operations",
          name: "Driftshold 3B",
          hours: "24",
          period: {
            da: "under festivalen",
            en: "during the festival"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=48139fa1-0d11-4635-8131-f14b0a25c044"
        },
        dis: {
          type: "dismantling",
          name: "Nedtagning",
          hours: "32",
          period: {
            da: "efter festivalen",
            en: "after the festival"
          },
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=e19c231c-f62b-47f6-b52f-b2ac93e6f7dd"
        }
      },
      content: {
        da: {
          misc: {
            overall: "Bliv frivillig i Food Court på Roskilde Festival",
            team:
              "Læs mere om her, og bliv tilmeldt Roskilde Festival på holdet: ",
            cta: "Tilmeld mig holdet: ",
            operation: "på driftshold",
            dismantling: "på nedtagningshold",
            rememberEmail:
              "Husk at sende en mail til foodcourt@roskilde-festival.dk med dine oplysninger når du er tilmeldt på People."
          },
          general: {
            headline: "Food Court og Dining Service",
            text:
              "I Food Court og Dining Service faciliterer vi 5 forskellige madområder, med en række madboder og restaurationer der severer mad til deltagerne på Roskilde Festival. <br>Under vores paraply er en lang række forskellige madtilbud, med fokus på økologisk kvalitetsmad."
          },
          operations: {
            headline: "Opgaven som frivllig",
            text:
              "I Food Court og Dining Service har vi under festivalen tre afviklingshold, som hjælper boderne med at yde deres ypperste, så de kan levere deres retter.<br>Til det har vi seks serviceteams som samarbejder med boderne under festivaldagene.<br>For at blive frivillig på vores afviklingshold skal du være fyldt 18 år når festivalen starter. <br>Som frivillig på vores afviklingshold kan opgaverne omfatte funktioner som:<br><ul><li>Service og renhold af publikumsområderne</li><li>Praktisk hjælp til bodernes backstage faciliteter</li><li>Adgangskontrol til Food Courts lukkede bagområder</li></ul><br>På en vagt får hver enkelt frivillig rum til at rotere mellem de mange opgaver, så man ser flere sider af Food Court."
          },
          dismantling: {
            headline: "Opgaven som frivllig",
            text:
              "<span class='has-text-weight-bold'>Vi gør opmærksom på at der ikke er flere pladser på nedtagningsholdet</span>I Food Court og Dining Service bygger vi alle vores boder, og genbruger en stor del af vores materialer. Derfor har vi brug for gode folk til at hjælpe med oprydning, nedtagning og nedpakning når festivalen er slut.<br>Som frivillig på vores nedtagningshold kan opgaverne omfatte funktioner som:<br><ul><li>Håndværksopgaver omkring nedtagning af boder</li><li>Oprydning på vores forskellige områder</li></ul><br>En vigtig ting at bemærke er at du har alle fordelene ved at være frivillig på festivalen, samtidigt med at du har fri i festivaldagene."
          },
          benefits: {
            headline: "Fordele og vilkår",
            text:
              "Som frivillig i Food Court på Roskilde Festival er man på vagt i alt ${hours} timer fordelt på tre vagter ${period}.<br>Der kræves ingen tidligere festivalerfaring, kun gåpåmod og villighed til at indgå i vores team i Food Court.<br>Alle vores frivillige får følgende:<ul><li>Entrébillet til hele festivalen</li><li>Adgang til Backstage Village og Volunteers Lounge</li><li>Mulighed for frivillig camping med gratis varme bade</li><li>Årets Roskilde Festival frivillig t-shirt</li><li>Forplejning under vagt</li></ul>"
          },
          signup: {
            headline: "Jeg vil gerne med!",
            text:
              "Fedt. Det er vi glade for! Klik på knappen nedenfor for at blive oprettet i festivalens system. Når du har gjort det skal du sende en mail til <a href='mailto:foodcourt@roskilde-festival.dk'>foodcourt@roskilde-festival.dk</a>. Vi sender dig en bekræftelse når du er tilmeldt. Det er også denne mail du skal skrive til, hvis du har spørgsmål."
          }
        },
        en: {
          misc: {
            overall: "Volunteer in Food Court at Roskilde Festival",
            team:
              "Read more about, and sign up as a volunteer at Roskilde Festival on the team: ",
            cta: "Sign up for the team: ",
            operation: "on operations team",
            dismantling: "on dismantling team",
            rememberEmail:
              "Remember to send an e-mail to foodcourt@roskilde-festival.dk with your information, when you have signed up in People."
          },
          general: {
            headline: "Food Court and Dining Service",
            text:
              "In Food Court and Dining Service we are facilitating 5 different food areas, with a wide range of food stalls and restaurants serving food for the participants at Roskilde Festival. <br>We focus on delivering different experiences in food, with focus on organic quality food."
          },
          operations: {
            headline: "The tasks as a volunteer",
            text:
              "In Food Court og Dining Service we have three operations teams during the festival. It is these teams, that help the food stalls do their best, in serving delicious meals<br>To handle these tasks, we have six serviceteams that works during the festival days.<br>In order to volunteer on our operations team, you will have to be at least 18 years old when the festival begins.<br>As a volunteer on our operation teams you can work with tasks such as:<br><ul><li>Service and cleaning the audience areas</li><li>Helping the food stalls in their backstage areas</li><li>Access control to the closed backstage areas at Food Court</li></ul><br>During a shift we aim to change between tasks, so that every volunteer will get to see different parts of Food Court during a shift."
          },
          dismantling: {
            headline: "The tasks as a volunteer",
            text:
              "<span class='has-text-weight-bold'>There is no free seats on the dismantling team</span>In Food Court and Dining Service we are building all of our food stalls, and we are reusing a lot of our constructions. We need people to help cleaning up, dismantling and packing up when the festival has ended.<br>As a volunteer on our dismantling team the tasks can be:<br><ul><li>Dismantling of food stalls</li><li>Cleaning tasks in our different areas</li></ul><br>An important thing to consider, regarding this volunteer job is that you get all of the benefits that regular volunteers do, plus you are off duty during the days when the music plays."
          },
          benefits: {
            headline: "Benefits as a volunteer",
            text:
              "As a volunteer in Food Court at Roskilde Festival you will work a total of ${hours} hours during three shifts ${period}.<br>We do not require any experience from the festival, only that you are ready to help and be part of our team in Food Court.<br>All of our volunteers will have the benefit that follows:<ul><li>A full festival ticket</li><li>Access to Backstage Village and Volunteers Lounge</li><li>Possibility to use volunteer camping with free how showers</li><li>This years Roskilde Festival volunteer t-shirt</li><li>Food and drinks during your shifts</li></ul>"
          },
          signup: {
            headline: "Cool. I'm in!",
            text:
              "Nice. We are so happy to hear that! Click the button below to sign up using the festival's volunteer platform. When you have done that, please send an e-mail to <a href='mailto:foodcourt@roskilde-festival.dk'>foodcourt@roskilde-festival.dk</a>. You will recieve a confirmation, when you are correctly signed up. If you have any questions, this e-mail is also the place to send these."
          }
        }
      }
    };
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
