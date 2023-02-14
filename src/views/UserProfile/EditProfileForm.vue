<template>
  <card class="card" title="Edit Profile">
    <div>
      <form @submit.prevent="register">
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text" label="text" placeholder="xxx@gmail.com" v-model="ruser.email">
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="text" label="Password" placeholder="Password" :value="ruser.password" @update="ruser.password=$event.target.modelValue">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="password" label="ConfirmPassword" placeholder="ConfirmPassword"
              :value="ruser.confirmpassword">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="First Name" placeholder="First Name" v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Last Name" placeholder="Last Name" v-model="user.lastName">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Address" placeholder="Home Address" v-model="user.address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text" label="City" placeholder="City" v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="Country" placeholder="Country" v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number" label="Postal Code" placeholder="ZIP Code" v-model="user.postalCode">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea rows="5" class="form-control border-input" placeholder="Here can be your description"
                v-model="user.aboutMe">
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-outline-success">
            Register
          </button>
        </div>
        <!-- <div class="clearfix"></div> -->
      </form>
    </div>
  </card>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmpassword: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`,
      },
      ruser: {
        email: "rong2@gmail.com",
        password: "Fake123!",
        confirmpassword: "Fake123!"
      },
    };
  },
  methods: {
    register() {
      const api = '/api/auth/register';
      alert("Your data: " + JSON.stringify(this.user));
      axios.post(api, this.ruser)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            //const { token, expired } = res.data;
            // console.log(token, expired);
            const token = res.data;
            console.log(res);
            document.cookie = `hexToken=${token};`;
            this.$router.push('/home');
          }
        });
    },
  },
};
</script>
<style>

</style>
