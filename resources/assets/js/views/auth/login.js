/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./../../bootstrap');

import Vue from 'vue';

import Global from './../../mixins/global';

import Form from './../../plugins/form';
import BulkAction from './../../plugins/bulk-action';

const app = new Vue({
    el: '#app',
    mixins: [
        Global
    ],
    data: function () {
        return {
            form: new Form('login')
        }
    },
    watch:{
        'form.response'(notify) {
            /*
            if (!notify.message) {
                return {};
            }

            var type = (notify.success) ? 'success' : 'warning';

            this.$notify({
                message: notify.message,
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type
            });
            */
        }
    }
});
