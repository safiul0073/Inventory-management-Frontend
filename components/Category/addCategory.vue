<template>
  <div class="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-800 text-gray-200">
    <div class="w-1/2 mx-auto pt-8">
      
        <div class=" py-2">
            <label for="" :class="valError.name? 'text-red-800': 'text-gray-100'" class=" font-bold text-lg mb-2 ">Name:</label>
            <input @change="clearErrors" required type="text" v-model="form.name" placeholder="Enter Category Name" class="w-full outline-none px-2 text-gray-700 rounded-full py-1" >
            <p v-show="valError.name" class="text-red-800 font-small py-1">Name Field Required</p>
            
        </div>
        <div class=" py-2 flex flex-col">
            <label for="" class=" font-bold text-lg mb-2 ">Description:</label>
            <textarea v-model="form.description" class="resize border rounded-md outline-none px-2 py-1 text-gray-700"></textarea>
        </div>
        <div class=" py-2 w-full ">
            <button @click="updateCategory" v-show="isUpdate" class="py-1 px-8 text-white bg-blue-900 rounded-full hover:bg-blue-600">Update</button>
            <button @click="storeCategory" v-show="!isUpdate" class="py-1 px-8 text-white bg-blue-900 rounded-full hover:bg-blue-600">Save</button>
        </div>

        
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      isUpdate: false,
      valError: {},
      form :{
        name: '',
        description: '',
        id: ''
      }
    }
  },

  methods: {
    clearErrors () {
      for (var variableKey in this.valError){
          if (this.valError.hasOwnProperty(variableKey)){
              delete this.valError[variableKey];
          }
      }
    },
    fromReset () {
          this.form.name = '',
          this.form.description = '',
          this.form.id = ''
    },
    async storeCategory () {
        this.$axios.post('/api/category/', this.form).then((response) => {
          this.fromReset()
        }).then((response) => {
          this.fromReset()
          $nuxt.$emit('AddCategoryCustomeEvent')
         
        }).catch((error) => {
          this.valError = error.response.data.errors
          alert(this.valError.name)
          console.log(this.valError.name)
        })
    },
    async updateCategory () {
        this.$axios.put(`/api/category/${this.form.id}`, {
          "method": "POST",
          "name": this.form.name,
          "description": this.form.description
        }).then((response) => {
          this.fromReset()
          this.isUpdate = !this.isUpdate;
          $nuxt.$emit('AddCategoryCustomeEvent')
        }).catch((error) => {
          this.valError = error.response.data.errors
          alert(this.valError.name)
          console.log(this.valError.name)
        })
        
    },

  },
    created() {
        this.$nuxt.$on('onMyEvent', (category) => {
                    this.isUpdate = !this.isUpdate;
                    this.form.name = category.name;
                    this.form.description = category.description
                    this.form.id = category.id;
                    
        })
        this.$nuxt.$on('cliningUpForm', () => {
                    this.fromReset()          
        })
    },
}
</script>

<style>

</style>