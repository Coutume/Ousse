<template>
    <v-toolbar>
        <v-toolbar-items class="icone"><img height="45px" src="https://www.zcraft.fr/wp-content/themes/zcraft-site-theme/img/logo.png"></v-toolbar-items>
        <v-toolbar-title>Oussé</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items >
            <z-banque-select></z-banque-select>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn flat to="/">Carte</v-btn>
            <v-btn flat to="/statistiques">Statistiques</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import ZBanqueSelect from '../Banque/z-banque-select'
export default {
  name: 'z-header',
  components: {ZBanqueSelect}
}
</script>

<style scoped>
.icone
{
    align-items: center;
}
</style>
