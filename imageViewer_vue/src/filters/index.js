import Vue from 'vue'
import appFilters from './app'

const filtersObj = Object.assign(appFilters)

Object.keys(filtersObj).forEach(key => {
  Vue.filter(key, filtersObj[key])
});
