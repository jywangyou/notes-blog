<!-- SearchComponent.vue -->
<template>
    <div>
      <input
        v-model="searchQuery"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
        @keydown.arrow-up.prevent="handleArrowUp"
        @keydown.arrow-down.prevent="handleArrowDown"
        placeholder=""
        class="card-search-input"
      />
      <ul v-if="isFocused && filteredData.length > 0">
        <li
          v-for="(card, index) in filteredData"
          :key="index"
          :class="{ activeselect: index === selectedIndex }"
          @mousedown.prevent="handleItemClick(index)"
        >
          <a :href="card.cardSrc" target="_blank">
            <!-- <img :src="card.cardImgSrc" alt="Card Image" class="card-search-img"/> -->
            <div>
              <h3 class="card-search-h">{{ card.cardName }}</h3>
              <p>{{ card.cardContent }}</p>
            </div>
          </a>
        </li>
      </ul>
      <!-- 修改此处的条件 -->
    <!-- <p v-else-if="isFocused && searchQuery !== ''">No matching results.</p> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cardData: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        searchQuery: "",
        isFocused: false,
        selectedIndex: -1,
      };
    },
    computed: {
      filteredData() {
        const query = this.searchQuery.toLowerCase();
        // 检查是否有 cardData 并确保它是一个数组
        if (this.cardData && Array.isArray(this.cardData) && query !== '') {
          return this.cardData.filter((card) => {
            return (
              card.cardName.toLowerCase().includes(query) ||
              card.cardContent.toLowerCase().includes(query)
            );
          });
        } else {
          return [];
        }
      },
    },
    methods: {
        handleEnter() {
        const selectedCard = this.filteredData[this.selectedIndex];
        if (selectedCard) {
          window.open(selectedCard.cardSrc, "_blank");
        }
      },
      handleInput() {
        this.selectedIndex = -1; // Reset selected index on input change
      },
      handleFocus() {
        this.isFocused = true;
      },
      handleBlur() {
        this.isFocused = false;
      },
      handleItemClick(index) {
        const selectedCard = this.filteredData[index];
        if (selectedCard) {
          window.open(selectedCard.cardSrc, "_blank");
        }
      },
      
      handleArrowUp() {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      }
    },
    handleArrowDown() {
      if (this.selectedIndex < this.filteredData.length - 1) {
        this.selectedIndex++;
      }
    },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    cursor: pointer;
    margin-bottom: 10px;
  }
  li:hover{
    box-shadow: #c0c0c0 0px 0px 5px;
    background-color: #fff;
    padding: 5px;
    border-radius: 3px;
  }
  li a:hover{
    text-decoration: none !important;
  }
  .activeselect {
    box-shadow: #c0c0c0 0px 0px 5px;
    background-color: #fff;
    padding: 5px;
    border-radius: 3px;
  }
  .card-search-img{
    float:left;
    height: 50px;
    margin-right: 10px;
  }
  .card-search-h{
    margin: 0;
  }
  .card-search-input{
    border: 1px solid #ccc;
    border-radius: 15px;
    height: 30px;
    padding: 0 30px;
    background: var(--mainBg) url(/assets/img/search.237d6f6a.svg) 0.6rem 0.5rem no-repeat;
  }
  .card-search-input:focus {
    cursor: auto;
    border-color: #11a8cd;
}
  </style>
  