<style scoped lang="less">
.primaryBtn {
    padding: 5px 20px;
    background: #3A6366;
    color: #FFF;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
</style>

<template>
    <div>
        <div class="sb" style="margin-bottom: 15px;">
            <div></div>
            <div class="primaryBtn size16 ju al op userselect" @click="showAddModal">+ {{$t("addCompany")}}</div>
        </div>
        <myTable :columns="columns" :list="list">
            <template slot="status" slot-scope="{row}">
                {{$t(row.status)}}
            </template>

            <template slot="btn" slot-scope="{row}">
                <div>
                    <Button type="info" size="small" style="margin-right:3px;"> {{$t( 'edit')}}</Button>
                    <Button type="error" size="small">  {{$t( 'delete')}}</Button>
                </div>
            </template>
        </myTable>

        <Modal v-model="showAdd" :title="$t('addCompany')" >
            <Form :model="addForm" ref="addForm" :label-width="120" :rules="rules">
                <FormItem :label="$t( 'cName' )" prop="name">
                    <Input type="text" v-model="addForm.name" style="width:250px;" :placeholder="$t( 'cName' )" />
                </FormItem>

                <FormItem :label="$t( 'cPhone' )" prop="phone">
                    <Input type="text" v-model="addForm.phone" style="width:250px;" :placeholder="$t( 'cPhone' )" />
                </FormItem>

                <FormItem :label="$t( 'address' )" prop="address">
                    <Input type="text" v-model="addForm.address" style="width:250px;" :placeholder="$t( 'address' )" />
                </FormItem>
            </Form>
        </Modal>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns: [
                {
                    title: "cName",
                    key: "name",
                },
                {
                    title: "cCreatedAt",
                    key: "createdAt",
                    time: true,
                },
                {
                    title: "cType",
                    key: "type",
                    searchType: "select"
                },
                {
                    title: "APP ID",
                    key: "appid"
                },
                {
                    title: "cPhone",
                    key:"mobile"
                },
                {
                    title: "status",
                    key: "status",
                    slot:"status"
                },
                {
                    title: "action",
                    slot:"btn",
                    noSearch:true,
                }
                
            ],
            list: [
                {
                    name: "香港華麗科技有限公司",
                    appid: "123456789",
                    mobile: "6677784",
                    createdAt: "2018-01-03",
                    type: "民營",
                    status: 'active'
                },
                {
                    name: "香港偉岸科技有限公司",
                    appid: "abcdefg",
                    mobile: "6677784",
                    createdAt: "2018-02-04",
                    type: "民營",
                    status: 'active'
                },
                {
                    name: "澳門運端科技有限公司",
                    appid: "87654321",
                    mobile: "6677784",
                    createdAt: "2008-09-03",
                    type: "國企",
                    status: 'frozen'
                },
                {
                    name: "深圳配發信息科技有限公司",
                    appid: "aaa123",
                    mobile: "6677784",
                    createdAt: "2020-11-03",
                    type: "國企",
                    status: 'active'
                },
                {
                    name: "廣州開酒科技有限公司",
                    appid: "ddd97d",
                    mobile: "6677784",
                    createdAt: "2013-09-08",
                    type: "民營",
                    status: 'active'
                },
            ],
            rules: {
                name: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                phone: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                address: [
                    { required: true, message: " ", trigger: "blur" }
                ],
            },
            showAdd: false,
            addForm: {
                name: "",mobile: "", address: ""
            }
        }
    },
    watch: {
        // $i18n(val) {
        //     console.log(val)
        // }
    },
    created () {
        this.list.forEach(item => {
            item.timestamp = new Date(item.createdAt)
        })
    },
    methods:{
        showAddModal () {
            this.showAdd = true
        }
    }
}
</script>

