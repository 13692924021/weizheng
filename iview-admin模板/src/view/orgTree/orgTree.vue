<style lang="less" scoped>
.primaryBtn {
    padding: 5px 20px;
    background: #3A6366;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
.addFormWrap {
    display: grid;
    grid-template-columns: 100px 1fr;
    >div:first-child {
        text-align: right;
        padding-right: 30px;    
        padding-top:6px;
    }
}
</style>

<template>
    <div>
        <div class="sb" style="margin-bottom: 15px;">
            <div></div>
            <div class="primaryBtn size16 ju al op userselect" @click="showAddModal">+{{$t("addCompany")}}</div>
        </div>
        <vue2-org-tree name="data"
            :data="list"
            :horizontal="false"
            :collapsable="false"
            :label-class-name="'aaa'"
            @on-expand="onExpand"
            @on-node-click="onNodeClick"
            :render-content="renderContent" />

        <Modal :title="$t('addCompany')" v-model="showAdd" :width="600" @on-ok="okAdd" :loading="loading">
            <div class="addFormWrap">
                <div>{{$t('select')}}: </div>
                <div> <Tree :data="[list]" @on-select-change="changeParent"></Tree> </div>
            </div>

            <div class="addFormWrap">
                <div>{{$t('cName')}}: </div>
                <div>
                    <Input type="text" style="width:300px" v-model="addForm.name" />
                </div>
            </div>
            
        </Modal>

        <Modal :title="$t('edit')" v-model="showEdit" :width="600" :loading="loading" @on-ok="okEdit">

            <div class="addFormWrap">
                <div></div>
                <!-- <div>( 已選公司 ) </div> -->
            </div>
            <!-- <div class="addFormWrap">
                <div>選擇父公司: </div>
                <div> <Tree :data="[list]"></Tree> </div>
            </div> -->

            

            <div class="addFormWrap">
                <div>{{$t('cName')}}: </div>
                <div>
                    <Input type="text" style="width:300px;margin-right:10px;" v-model="current.label" /> 
                    <Button type="error" @click="delCompany">{{$t('delete')}}</Button>
                </div>
            </div>
            
            <br>

            <!-- <div class="addFormWrap">
                <div> </div>
                <div>
                    <Button type="error" >刪除</Button>
                </div>
            </div> -->
            
        </Modal>


    </div>
</template>

<script>
export default {
    data () {
        return {
            list: {
                id: 1,
                label: '母公司',
                children: [
                    {
                        id: 2,
                        label: '子公司一',
                        children: [
                            {
                                id: 5,
                                label: '辦公室'
                            }, 
                            {
                                id: 6,
                                label: '門市'
                            },
                            {
                                id: 9,
                                label: '工場'
                            },
                        ]
                    },
                    {
                        id: 3,
                        label: '子公司2',
                        children: [
                            {
                                id: 7,
                                label: 'Sales 1'
                            }, 
                            {
                                id: 8,
                                label: 'Sales 2'
                            }
                        ]
                    },
                    {
                        id: 4,
                        label: '子公司3'
                    },
                ]
            },
            loading: true,
            current: {},
            showAdd: false,
            showEdit: false,
            addForm: {
                parent:{},
                name: ""
            },
        }
    },
    created () {
        this.fixChild(this.list)
    },
    methods:{
        delCompany () {
            let that = this
            this.$Modal.confirm({
                title: "提示",
                content:"確定刪除這條數據?",
                onOk () {
                    let obj = that.current
                    obj.label = ""
                    obj.id = ""
                    that.filterList(that.list)
                    that.showEdit = false
                    that.current = {}
                }
            })
            
        },
        okEdit () {
            this.showEdit = false
        },
        filterList (item) {

            if (!item.id) {
                item.children = []
                item = {}
            }
            console.log(item)
            if (item.children) {
                item.children = item.children.filter(c => c.id)
                item.children.forEach(c => {
                    this.filterList(c)
                })
            }
        },
        okAdd () {
            this.hideLoading()
            if (!this.addForm.parent.id) {
                this.$Message.warning("請選擇父級公司")
                return false
            }
            if (!this.addForm.name) {
                this.$Message.warning("請輸入名稱")
                return false
            }
            this.addForm.parent.children.push({
                id: this.addForm.parent.id + 999,
                label: this.addForm.name,
                title: this.addForm.name,
                children: []
            })
            this.showAdd = false
            this.addForm.parent = {}
            this.addForm.name = ""
            this.list = JSON.parse(JSON.stringify(this.list))
            this.fixSelected(this.list)
        },
        hideLoading () {
            this.loading = false
            this.$nextTick(() => {
                this.loading = true
            })
        },
        fixSelected (item) {
            item.selected = false
            if (item.children) {
                item.children.forEach(c => {
                    c.selected = false
                    this.fixChild(c)
                })
            } else {
                item.children = []
            }
        },
        changeParent (e) {
            console.log(e)
            if (e[0]) {
               this.addForm.parent = e[0] 
            } else {
                this.addForm.parent = {}
            }
            
        },
        fixChild (item) {
            item.title = item.label
            if (item.children) {
                item.children = item.children.filter(c => { return item.id })
                item.children.forEach(c => {
                    this.fixChild(c)
                })
            } else {
                item.children = []
            }
        },
        showAddModal () {
            this.showAdd = true
        },
        renderContent(h, data) {
            return data.label;
        },
        onExpand (e) {
            console.log(e)
        },
        onNodeClick (e,data) {
            console.log(data)
            this.current = data
            this.showEdit = true
        },
    }
}
</script>

