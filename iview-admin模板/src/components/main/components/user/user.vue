<style lang="less" scoped>
    .wrap {
    // min-width: 200px;
    height: 40px;
    margin-top: 10px;
    // border: 1px solid #102452;
    // color: #FFF;
    cursor: pointer;
    position: relative;
    &:hover .list {
      display:block;
    }
  }
  .icon {
    width: 0;
    height: 0;
    border: solid transparent 5px;
    border-top: solid #FFF 5px;
    margin-top: 6px;
    margin-left:3px;
  }
  .list {
    width: 100%;
    position: absolute;
    left: 0;
    top: 99%;
    z-index:200;
    background: #102452;
    display: none;
    >div {
      border-bottom: solid #FFF 1px;
      color: #FFF;
      height: 40px;
    }
  }
  .ava {
      width: 40px;
      >div {
          width: 30px;
          height: 30px;
          background: #3A6366;
          border-radius: 50%;
      }
  }
  .userInfo {
      width: 70%;
      >div:first-child {
          color: #7EB5A0;
      }
      >div:last-child {
          white-space: nowrap;
      }
  }
  .userBox {
      width: 100%;
      line-height: 1.5em;
  }
  .colorfff {
      color: #fff;
  }
</style>

<template>
  <!-- <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvator"/>
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登錄</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div> -->
  <div class="wrap ju al">
    <div class="userBox al">
        <div class="ava">
            <div></div>
        </div>
        <div class="userInfo">
            <div class="bold size17">Administator</div>
            <div class="size15 rela al colorfff">
                {{username}}
                <div class="icon"></div>
            </div>
        </div>
    </div>
    <!-- <div class="icon"></div> -->
    <div class="list">
        <div class="ju al" @click="logout">{{$t( 'logout' )}}</div>
    </div>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  data () {
      return {
          username:""
      }
  },
  props: {
    userAvator: {
      type: String,
      default: '@/assets/images/logo.png'
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  activated () {
      this.getUser()
  },
  created () {
        this.getUser()
  },
  methods: {
    ...mapActions([
      'handleLogOut' 
    ]),
    getUser () {
        let accountInfo = localStorage.getItem("accountInfo")
        // console.log(accountInfo)
        if (accountInfo) {
            accountInfo = JSON.parse(accountInfo)
            this.username = accountInfo.user_detail.username
        }
    },
    logout () {
      localStorage.removeItem("JWT")
      localStorage.removeItem("accountInfo")
    //   this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
    //   })
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
      }
    }
  }
}
</script>
