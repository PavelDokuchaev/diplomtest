<template>
  <header class="header center">
    <div class="header-title">
      <h1 class="header-title__head">ФОТОГРАФ</h1>
      <h1 class="header-title__subhead">ПАВЕЛ ДОКУЧАЕВ</h1>
    </div>
    <div class="header-links">
      <router-link class="header-links__item" :to="{ name: 'Main' }">ГЛАВНАЯ</router-link>
      <router-link class="header-links__item" :to="{ name: 'Author' }">ОБ АВТОРЕ</router-link>
      <Menu as="div" class="relative inline-block text-left">
        <MenuButton class="header-links__btn">ПРОЕКТЫ</MenuButton>
        <MenuItems class="header-links__menuitems">
          <MenuItem v-slot="{ active }">
          <a class="header-links__menuitems-el" :class='{ "bg-blue-500": active }'
            @click="this.$router.push('/macho-na-dosuge')">
            МАЧО НА ДОСУГЕ
          </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a class="header-links__menuitems-el" :class='{ "bg-blue-500": active }'
            @click="this.$router.push('/pacan-k-uspehu-shel')">
            ПАЦАН К УСПЕХУ ШЕЛ ИЛИ 12 СОВЕТОВ,<br />КАК СТАТЬ УСПЕШНЫМ
          </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
          <a class="header-links__menuitems-el" :class='{ "bg-blue-500": active }'
            @click="this.$router.push('/kostyanoy-yazik')">
            КОСТЯНОЙ ЯЗЫК
          </a>
          </MenuItem>
        </MenuItems>

      </Menu>
      <router-link class="header-links__item" :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link>
    </div>
  </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';


</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;

  &-title {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__head {
      color: rgb(50, 50, 50);
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'Gilroy-Medium';
      padding-right: 20px;
    }

    &__subhead {
      color: rgb(50, 50, 50);
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'Gilroy-Medium';
      border-left: solid 3px rgb(50, 50, 50);
      padding-left: 10px;
    }
  }

  &-links {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    &__item {
      padding: 20px;
      color: rgb(92, 92, 92);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'Gilroy-Medium';
    }

    &__btn {
      padding: 20px;
      color: rgb(92, 92, 92);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'Gilroy-Medium';
      background-color: rgb(255, 254, 242);
      border: none;
      cursor: pointer;
    }

    &__btn:hover {
      color: black;
      transition: all .3s ease-in-out;
    }

    .header-links__menuitems {
      padding: 20px;
      color: rgb(92, 92, 92);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-family: 'Gilroy-Medium';
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: rgb(255, 254, 242);
      box-shadow: 10px 10px 5px rgba(92, 92, 92, 0.21);
      position: absolute;
      top: 60px;
      max-width: 345px;

      &-el {
        cursor: pointer;
      }
    }
  }
}
</style>