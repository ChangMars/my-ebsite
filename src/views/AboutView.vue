<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <li v-for="itme in products">dd</li> -->
    <div class="container">
      <div class="row">
        <div class="col" v-for="item in products" :key="item">
          {{ item.name }}
          <!-- <Card :param="item"></Card> -->
        </div>
      </div>
    </div>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <input type="range" id="range" max="10" min="0">
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      products: [
        {
          name: 'test1',
          url: 'https://cataas.com/cat'
        },
        {
          name: 'test2',
          url: 'https://cataas.com/cat?type=bb'
        },
        {
          name: 'test3',
          url: 'https://cataas.com/cat?type=cc'
        }
      ]
    }
  }
}
</script>
