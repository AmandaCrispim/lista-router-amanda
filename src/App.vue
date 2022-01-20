<template>
  <v-app>
    
      <v-app-bar app color="primary" dark elavation="1"> 
        <v-app-bar-nav-icon @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
      </v-app-bar>
           <v-navigation-drawer app v-model="sidebar" :mini-variant.sync="mini">
                <v-list nav color="primary" dark> 
                  <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="sidebar = !sidebar">mdi-chevron-left</v-icon>
                    </v-list-item-action>
                        <v-list-item-title>
                           <h3> Minhas Tarefas</h3>
                        </v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>mdi-clipboard-text-multiple</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>Configurações</v-list-item-content>
                  <v-btn icon small><v-icon>mdi-chevron-down</v-icon></v-btn>
                  </v-list-item>
                  <v-divider></v-divider>
                          <v-list>
                              <v-list-item v-for="item of items" :key="item.title">
                                <v-list-item-icon>
                                  <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>{{ item.title }}</v-list-item-content>
                              </v-list-item>
                          </v-list>
                              
           </v-navigation-drawer>
       <v-main> 
         <router-view></router-view>
       </v-main>
    <v-footer app> <span class="overline">  Minha Lista &copy;2022 </span> </v-footer>
     </v-app>
</template>

<script>
export default {
  data () {
    return{
      sidebar : true,
      mini : false,
      items : [
        { title : "home", icon: "mdi-home", to : "/"},
        { title : "perfil", icon: "mdi-account-circle", to : "/perfil" },
        { title : "home", icon: "mdi-home", to : "/"},
        { title : "perfil", icon: "mdi-account-circle", to : "/perfil" },
        { title : "home", icon: "mdi-home", to : "/"},
        { title : "perfil", icon: "mdi-account-circle", to : "/perfil" },
        
        
      ],
    }
  },

};
</script>

<style>

</style>
