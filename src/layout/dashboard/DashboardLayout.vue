<template>
    <div>
        <top-navbar></top-navbar>
        <dashboard-content></dashboard-content>
        <content-footer></content-footer>
    </div>
</template>

<script>
import TopNavbar from '../TopNavbar.vue';
import ContentFooter from '../ContentFooter.vue';
import DashboardContent from '../Content.vue';

export default {
    components: {
        TopNavbar,
        DashboardContent,
        ContentFooter,      
    },
    methods: {
        logout() {
            const api = `${process.env.VUE_APP_API}logout`;
            console.log(api);
            this.$http.post(api, this.user)
                .then((res) => {
                    if (res.data.success) {
                        console.log(res);
                        this.$router.push('/login');
                    }
                });
        },
    },
};
</script>
