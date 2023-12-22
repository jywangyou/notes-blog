<template>
  <div>
    <template v-if="cardData[0].title != undefined">
      <div style="text-align: center; font-weight: 900">{{ cardData[0].title }}</div>
    </template>
    <div class="kbt-row">
      <div class="card-nav-box" :style="cardListSize == 4
          ? 'width: 25%;'
          : cardListSize == 2
            ? 'width: 50%;'
            : 'width: 33.333%;'
        " v-for="(item, index) in cardData" :key="index">
        <a :href="item.cardSrc" target="_blank">
          <div class="card-nav-item">
            <div class="card-nav-title" :style="{
              backgroundImage: `url('${item.cardImgSrc}')`,
              backgroundPosition: 'left top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto 100%'
            }">
              <!-- <img
                v-if="item.cardImgSrc && item.cardImgSrc != ''"
                :src="item.cardImgSrc"
                alt="正在加载 ..."
                class="card-nav-img no-room"
              /> -->
              <p class="card-nav-name" :style="'color:' + carTitleColor">
                {{ item.cardName }}
              </p>
            </div>
            <div :title="item.cardContent" class="card-nav-content">
              {{ item.cardContent }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      shouldShowPTags: [], // 使用数组记录每个 .card-nav-box 下的状态
    };
  },
  props: {
    cardData: {
      type: Array,
      default: [],
    },
    cardListSize: {
      type: Number,
      default: 3,
    },
    carTitleColor: {
      type: String,
      default: "#000",
    },
    carHoverColor: {
      type: String,
      default: "#000",
    },
  },
  mounted() {
    this.cardHoverColor();
    // 监听窗口大小变化事件
    window.addEventListener('resize', this.handleResize);

    // // 初始时执行一次
    this.handleResize();
  },
  beforeDestroy() {
    // 移除窗口大小变化事件监听器，防止内存泄漏
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    cardHoverColor() {
      if (!document.querySelector(".card")) {
        const carHoverColor = this.carHoverColor;
        let style = document.createElement("style");
        style.className = 'card';
        style.innerHTML = `.card-nav-content:hover{color: ${carHoverColor}}`;
        document.head.appendChild(style);
      }
    },
    handleResize() {
      // 根据条件判断是否隐藏 <p> 标签
      this.cardData.map((item, index) => this.isPOverlapping(index));
    },
    isPOverlapping(index) {
      var cardnavtitle = this.$el.querySelectorAll('.card-nav-item')[index].querySelectorAll('.card-nav-title')[0];
      var cardnavPw = this.$el.querySelectorAll('.card-nav-item')[index].querySelectorAll('.card-nav-title')[0].querySelectorAll('.card-nav-name')[0].getBoundingClientRect().width;
      var cardnavTw = this.$el.querySelectorAll('.card-nav-item')[index].querySelectorAll('.card-nav-title')[0].getBoundingClientRect().width;
      if ((cardnavPw * 2) > cardnavTw) {
        this.$el.querySelectorAll('.card-nav-item')[index].querySelectorAll('.card-nav-title')[0].querySelectorAll('.card-nav-name')[0].style.display = "none"
      } else {
        this.$el.querySelectorAll('.card-nav-item')[index].querySelectorAll('.card-nav-title')[0].querySelectorAll('.card-nav-name')[0].style.display = "inline-block"
      }
    },
  },
};
</script>
  
<style scoped>
.kbt-row {
  margin: 0.7rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.card-nav-box {
  padding: 0 10px 0 10px;
  box-sizing: border-box;
}

.card-nav-box a:hover {
  text-decoration: none !important;
}

.card-nav-item {
  min-height: 76px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: var(--mainBg);
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  transition: all 0.4s;
}

.card-nav-item:hover {
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.7);
  transform: translateY(-3px) scale(1.01, 1.01);
}

.card-nav-title {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  margin: 5px 0;
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
}

.card-nav-img {
  height: 38px;
}

.card-nav-name {
  height: 40px;
  float: right;
  font-size: 15px;
  margin: 0 0;
  line-height: 40px;
  white-space: nowrap;
  background-color: var(--mainBg);
  padding: 0 5px;
  color:var(--textColor) !important;
}

.card-nav-content {
  margin-top: 10px;
  font-size: 13px;
  color: #999;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 37px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
  