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
            <div class="primaryBtn size16 ju al op userselect" @click="showAddModal">+ {{$t("addCIGS")}}</div>
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

        <Modal v-model="showAdd" :title="$t('addCIGS')" >
            <Form :model="addForm" ref="addForm" :label-width="120" :rules="rules">
                <FormItem :label="$t( 'username' )" prop="username">
                    <Input type="text" v-model="addForm.username" style="width:250px;" :placeholder="$t( 'username' )" />
                </FormItem>

                <FormItem :label="$t( 'password' )" prop="password">
                    <Input type="text" v-model="addForm.password" style="width:250px;" :placeholder="$t( 'password' )" />
                </FormItem>

                <FormItem :label="$t( 'password2' )" prop="password2">
                    <Input type="text" v-model="addForm.password2" style="width:250px;" :placeholder="$t( 'password2' )" />
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
                    title: "allName",
                    key: "username",
                },
                {
                    title: "createdAt",
                    key: "createdAt",
                    time: true,
                },
                
                {
                    title: "action",
                    slot:"btn",
                    noSearch:true,
                }
                
            ],
            list: [
                {
                    username: "data1",
                    createdAt: "2018-01-03",
                },
                {
                    username: "data2",
                    createdAt: "2018-02-04",
                },
                {
                    username: "data3",
                    createdAt: "2008-09-03"
                },
                {
                    username: "data4",
                    createdAt: "2020-11-03",
                },
                {
                    username: "data5",
                    createdAt: "2013-09-08"
                },
            ],
            rules: {
                username: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                password: [
                    { required: true, message: " ", trigger: "blur" }
                ],
                password2: [
                    { required: true, message: " ", trigger: "blur" }
                ],
            },
            showAdd: false,
            addForm: {
                username: "",password: "", password2: ""
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
            // this.showAdd = true
        }
    }
}
</script>

