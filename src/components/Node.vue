<template>
  <v-expansion-panel class="accordion-node">
    <v-expansion-panel-header>
      <div class="d-flex">
        <div class="d-flex flex-column">
          <span class="accordion-header-name">{{node.name}}</span>
          <span class="accordion-header-url">{{node.url}}</span>
        </div>
        <v-badge class="accordion-badge" left bordered dot inline :color="getColor">
          <span class="text-uppercase accordion-status-text">{{ getStatusText }}</span>
        </v-badge>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card v-for="block in node.blocks" :key="block.id" class="accordion-expansion rounded-sm" elevation="0" color="#E0DFE0"
              outlined shaped tile>
        <div class="d-flex flex-column ml-2 mt-1 mb-1 mr-2">
          <span class="accordion-expansion-id">{{ block.id }}</span>
          <span class="accordion-expansion-name">{{ block.name }}</span>
        </div>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "node",
  props: {
    node: {
      url: String,
      online: Boolean,
      name: String,
      loading: Boolean,
      blocks: Array,
    },
  },
  data: () => ({}),
  computed: {
    getColor() {
      let badgeColor = "#Eb5757";

      if (this.node.online) {
        badgeColor = "#18cc55";
      }
      return badgeColor;
    },
    getStatusText() {
      let statusText = "Loading";

      if (!this.node.loading) {
        if (this.node.online) {
          statusText = "Online";
        } else {
          statusText = "Offline";
        }
      }
      return statusText;
    },
  },
};
</script>

<style scoped>
.accordion-badge {
  margin-left: auto;
  margin-right: 12px;
  margin-top: 1px;
}
.accordion-header-name {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
  color: #263238;
}

.accordion-header-url {
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #263238;
  opacity: 0.54;
}

.accordion-status-text {
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: #263238;
}
.accordion-expansion {
  margin-top: 5px;
  display: flex;
}

.accordion-expansion-id {
  font-weight: 700;
  font-size: 12px;
  color: #516af8;
}

.accordion-expansion-name {
  font-size: 14px;
}
</style>

<style>
.accordion-node .v-expansion-panels--accordion {
  padding-bottom: 12px;
}

.accordion-node .accordion-badge.v-badge--dot .v-badge__badge {
  height: 6px;
  margin-top: 18px;
  width: 6px;
}

@media only screen and (max-width: 442px) {
  .accordion-node .accordion-badge.v-badge--dot .v-badge__badge {
    margin-top: 28px;
  }
}
</style>