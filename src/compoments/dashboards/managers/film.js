import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { DatabaseOutlined, } from '@ant-design/icons';
import { Table, Space, Modal, Divider, Button, Input, Popconfirm, AutoComplete, ConfigProvider } from 'antd';
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CloseSquareFilled, DeleteOutlined } from '@ant-design/icons';
import { getListFilm } from '../../../services/filmServices';

class film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenFormCreate: false,
            isOpenFormDetail: false,
            isOpenFormEdit: false,
            dataFilm: {},
            dataFilms: [],
            idFilm: '',
            dataSearch: [],
        }
    }
    async componentDidMount() {
        await this.getListFilm();
    }
    getListFilm = async () => {
        try {
            let data = await getListFilm();
            if (data && data.data && data.data.success == 1) {
                let dataRaw = data.data.data;
                this.setState({
                    dataFilms: dataRaw,
                })
            } else {
                return this.setState({ dataFilms: [] })
            }
        } catch (e) {
            console.log('Lỗi', e);
        }
    }
    // getFilm = async (id) => {
    //     try {
    //         let data = await getFilm(id);
    //         if (data && data.data && data.data.success == 1) {
    //             this.setState({ dataFilm: data.data.data })
    //         }
    //     } catch (e) {
    //         console.log('Lỗi', e);
    //     }
    // }
    handleOnchangeInput = (event, id) => {
        let copyState = { ...this.state.dataFilm };
        copyState[id] = event.target.value;
        this.setState({
            dataFilm: {
                ...copyState
            }
        });
    }
    openForm = async (name, value, id) => {
        if (name == 'create') { this.setState({ isOpenFormCreate: value }) }
        if (name == 'detail') {
            if (id == null) {
                this.setState({ isOpenFormDetail: value });
            } else {
                this.setState({ isOpenFormDetail: value });
                //await this.getFilm(id);
            }
        }
        if (name == 'edit') {
            if (id == null) {
                this.setState({ isOpenFormEdit: value });
            } else {
                this.setState({ isOpenFormEdit: value, idFilm: id });
                //await this.getFilm(id);
            }
        }
    }
    isCheckEmpty = (value) => { return value.trim().length }
    isCheckSpace = (value) => { return (/\s/).test(value); }
    Validation = (data) => {
        return { code: 0 };
    }
    ValidationEdit = (data) => {
        return { code: 0 };
    }
    handleCreate = async () => {
    }
    handleEdit = async (id) => {
    }
    handleDelete = async (id) => {
    }
    onSelect = async (value, option) => {
        //await this.getListFilm();
        let dataFilms = this.state.dataFilms;
        let result = dataFilms.filter(obj => {
            return obj.id === option.key
        })
        this.setState({ dataFilms: result })
    }
    onClearAutoComplete = async () => {
        //await this.getListFilm()
    }
    render() {
        let dataFilms = this.state.dataFilms;
        let dataFilm = this.state.dataFilm
        const columns = [
            {
                title: 'Id', dataIndex: 'code', responsive: ['md'], width: 100,
                sorter: (a, b) => a.code - b.code,
            },
            {
                title: 'Ảnh', dataIndex: 'image', responsive: ['md'],
                render: (image) => <img src={require(`../../../assets/images/${image}`).default} className='h-[100px] w-[80px]' />,
            },
            {
                title: 'Tên', dataIndex: 'name',
                sorter: (a, b) => a.name.localeCompare(b.name),
            },
            {
                title: 'Hđ', width: 100,
                render: (_, record) => (
                    <Space size="small" >
                        <a onClick={() => this.openForm('detail', true, record.id)}><AiFillEye /></a>
                        <a onClick={() => this.openForm('edit', true, record.id)}><AiFillEdit /></a>
                        <Popconfirm title="Xóa ?" okType='default' onConfirm={() => this.handleDelete(record.id)}>
                            <a><AiFillDelete /></a>
                        </Popconfirm>
                    </Space>
                ),
            },
        ];
        return (
            <>
                <div className='m-[10px] p-[10px] border shadow-md bg-white'>
                    <div className='flex items-center justify-between'>
                        <Button disabled size='small' onClick={() => this.openForm('create', true)} type='default' className='bg-black text-white'>Tạo mới</Button>
                        <AutoComplete className='md:w-[300px] w-[200px]'
                            options={this.state.dataSearch}
                            onSelect={(value, option) => this.onSelect(value, option)}
                            placeholder="Tìm tên"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            onClear={() => this.onClearAutoComplete()}
                            allowClear
                        />
                    </div>
                    <Divider>PHIM</Divider>
                    <Table columns={columns} dataSource={this.state.dataFilms}
                        size="small" bordered
                        pagination={{ pageSize: 7, }}
                        scroll={{ y: 300, x: 300, }}
                    />
                    <Modal title="Tạo mới" open={this.state.isOpenFormCreate}
                        okText={'Xác nhận'} okType={'default'} cancelText={'Hủy bỏ'}
                        onOk={() => this.handleCreate()}
                        onCancel={() => this.openForm('create', false)}
                        width={300} >
                        <div className='space-y-[10px]'>
                            <div>
                                <label>Họ tên<span className='text-red-500'> *</span></label>
                                <Input />
                            </div>
                            <div>
                                <label>Mã sinh viên<span className='text-red-500'> *</span></label>
                                <Input />
                            </div>
                            <div>
                                <label>Số điện thoại<span className='text-red-500'> *</span></label>
                                <Input />
                            </div>
                        </div>
                    </Modal>
                    <Modal title="Chi tiết" open={this.state.isOpenFormDetail}
                        okText={'Xác nhận'} okType={'default'} cancelText={'Hủy bỏ'}
                        onOk={() => this.openForm('detail', false, null)}
                        onCancel={() => this.openForm('detail', false, null)}
                        width={300}
                    >
                        <div className='space-y-[10px]'>
                            <div>
                                <label>Id<span className='text-red-500'> *</span></label>
                                <Input value={dataFilm.id} />
                            </div>
                            <div>
                                <label>Họ tên<span className='text-red-500'> *</span></label>
                                <Input value={dataFilm.name} />
                            </div>
                            <div>
                                <label>Mã sinh viên<span className='text-red-500'> *</span></label>
                                <Input value={dataFilm.student_id} />
                            </div>
                            <div>
                                <label>Email<span className='text-red-500'> *</span></label>
                                <Input value={dataFilm.email} />
                            </div>
                            <div>
                                <label>Số điện thoại<span className='text-red-500'> *</span></label>
                                <Input value={dataFilm.phone_number} />
                            </div>
                            <div>
                                <label>Ngày tạo<span className='text-red-500'> *</span></label>
                                <Input value={dataFilm.created_at} />
                            </div>
                            <div>
                                <label>Ngày cập nhập<span className='text-red-500'> *</span></label>
                                <Input value={dataFilm.updated_at} />
                            </div>
                        </div>
                    </Modal>
                    <Modal title="Chỉnh sửa" open={this.state.isOpenFormEdit}
                        okText={'Xác nhận'} okType={'default'} cancelText={'Hủy bỏ'}
                        onOk={() => this.handleEdit(this.state.idFilm)}
                        onCancel={() => this.openForm('edit', false, null)}
                        width={300}
                    >
                        <div className='space-y-[10px]'>
                            <div className='space-y-[10px]'>
                                <div>
                                    <label>Id<span className='text-red-500'> *</span></label>
                                    <Input value={dataFilm.id} disabled />
                                </div>
                                <div>
                                    <label>Họ tên<span className='text-red-500'> *</span></label>
                                    <Input value={dataFilm.name} />
                                </div>
                                <div>
                                    <label>Mã sinh viên<span className='text-red-500'> *</span></label>
                                    <Input value={dataFilm.student_id} />
                                </div>
                                <div>
                                    <label>Email<span className='text-red-500'> *</span></label>
                                    <Input value={dataFilm.email} disabled />
                                </div>
                                <div>
                                    <label>Số điện thoại<span className='text-red-500'> *</span></label>
                                    <Input value={dataFilm.phone_number} />
                                </div>
                                <div>
                                    <label>Ngày tạo<span className='text-red-500'> *</span></label>
                                    <Input value={dataFilm.created_at} disabled />
                                </div>
                                <div>
                                    <label>Ngày cập nhập<span className='text-red-500'> *</span></label>
                                    <Input value={dataFilm.updated_at} disabled />
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </>
        );
    }

}
export default withRouter(film);
