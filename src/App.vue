<template>
  <div class="app">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Bliv frivillig på i Food Court på Roskilde Festival</h1>
          <h2
            class="subtitle"
          >Du kan blive frivillig på holdet {{ teams[session.team].name }} på Roskilde Festival i år</h2>
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
          :headline="content[session.language].benefits.headline"
          :text="content[session.language].benefits.text"
        />
        <TextField
          :headline="content[session.language].signup.headline"
          :text="content[session.language].signup.text"
        />
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <a
              :href="teams[session.team].link"
              class="button is-link"
              target="_blank"
            >Tilmeld dig {{ teams[session.team].name }}</a>
          </p>
        </div>
      </div>
    </section>
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
        op1a: {
          type: "operations",
          name: "Driftshold 1A",
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=3650162e-c6a9-4568-9a1f-f6aa4f204c36"
        },
        op1b: {
          type: "operations",
          name: "Driftshold 1B",
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=58e9ce6f-8389-4599-8d07-eeb6803ca210"
        },
        op2a: {
          type: "operations",
          name: "Driftshold 2A",
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=7e18f5d5-c0ac-4bcc-b159-79099961c0b7"
        },
        op2b: {
          type: "operations",
          name: "Driftshold 2B",
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=001cfa59-1653-4586-a15c-446606f1dec4"
        },
        op3a: {
          type: "operations",
          name: "Driftshold 3A",
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=60068612-e1f9-4b56-aa75-6dc4972ec39e"
        },
        op3b: {
          type: "operations",
          name: "Driftshold 3B",
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=48139fa1-0d11-4635-8131-f14b0a25c044"
        },
        dis: {
          type: "dismantling",
          name: "Nedtagning",
          link:
            "https://people-vol.roskilde-festival.dk/bliv-frivillig/?guid=e19c231c-f62b-47f6-b52f-b2ac93e6f7dd"
        }
      },
      content: {
        da: {
          general: {
            headline: "Food Court og Dining Service",
            text:
              "I Food Court og Dining Service faciliterer vi 5 forskellige madområder, med en række madboder og restaurationer der severer mad til deltagerne på Roskilde Festival. <br>Under vores paraply er en lang række forskellige madtilbud, med fokus på økologisk kvalitetsmad."
          },
          operations: {
            headline: "Opgaven som frivllig",
            text:
              "I Food Court og Dining Service har vi under festivalen tre afviklingshold, som hjælper boderne med at yde deres ypperste, så de kan levere deres retter.<br>Til det har vi seks serviceteams som samarbejder med boderne under festivaldagene.<br>Som frivillig på vores afviklingshold kan opgaverne omfatte funktioner som:<br><ul><li>Service og renhold af publikumsområderne</li><li>Praktisk hjælp til bodernes backstage faciliteter</li><li>Adgangskontrol til Food Courts lukkede bagområder</li></ul><br>På en vagt får hver enkelt frivillig rum til at rotere mellem de mange opgaver, så man ser flere sider af Food Court."
          },
          dismantling: {
            headline: "Opgaven som frivllig",
            text:
              "I Food Court og Dining Service har vi under festivalen tre afviklingshold, som hjælper boderne med at yde deres ypperste, så de kan levere deres retter.<br>Til det har vi seks serviceteams som samarbejder med boderne under festivaldagene.<br>Som frivillig på vores afviklingshold kan opgaverne omfatte funktioner som:<br><ul><li>Service og renhold af publikumsområderne</li><li>Praktisk hjælp til bodernes backstage faciliteter</li><li>Adgangskontrol til Food Courts lukkede bagområder</li></ul><br>På en vagt får hver enkelt frivillig rum til at rotere mellem de mange opgaver, så man ser flere sider af Food Court."
          },
          benefits: {
            headline: "Fordele og vilkår",
            text:
              "Som frivillig i Food Court på Roskilde Festival er man på vagt i alt 24 timer fordelt på tre vagter under festivaldagene.<br>Der kræves ingen tidligere festivalerfaring, kun gåpåmod og villighed til at indgå i vores team i Food Court.<br>Alle vores frivillige får følgende:<ul><li>Entrébillet til hele festivalen</li><li>Adgang til Backstage Village og Volunteers Lounge</li><li>Mulighed for frivillig camping med gratis varme bade</li><li>Årets Roskilde Festival frivillig t-shirt</li><li>Forplejning under vagt</li></ul>"
          },
          signup: {
            headline: "Jeg vil gerne med!",
            text:
              "Fedt. Det er vi glade for! Klik på knappen nedenfor for at blive oprettet i festivalens system. Når du har gjort det skal du sende en mail til <a href='mailto:foodcourt@roskilde-festival.dk'>foodcourt@roskilde-festival.dk</a>. Vi sender dig en bekræftelse når du er tilmeldt. Det er også denne mail du skal skrive til, hvis du har spørgsmål."
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
      this.session.team = params.get("team");
    }
  }
};
</script>

<style lang="scss"></style>
