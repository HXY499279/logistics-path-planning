import React, { useContext, useState, useEffect, useRef } from 'react'
import { Table, Input, Button, Popconfirm, Form, Modal } from 'antd'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserIdAC } from '../../../../redux/actionCreators'
export const Home = () => {
  // 获取状态
  const userId = useSelector(state => state.userInfo.userId)
  // 拿到派发action的工具
  const dispatch = useDispatch()
  // 通过getUserIdAC生成action，然后dispatch出去
  dispatch(getUserIdAC(1))

  //表格数据
  const [data, setData] = useState([])

  //当前页码
  const [page, setPage] = useState(1)

  //当前页容量
  const [pageSize, setPageSize] = useState(10)

  //添加项目表格显示情况
  const [visible, setVisible] = useState(false)
  //表格列表
  const columns = [
    {
      title: '项目ID',
      key: 'questionId',
      dataIndex: 'questionId',
    },
    {
      title: '项目名',
      key: 'questionName',
      dataIndex: 'questionName',
    },
    {
      title: '执行状态',
      key: 'processState',
      dataIndex: 'processState',
    },
    {
      title: '算法选择',
      key: 'executed',
      dataIndex: 'executed',
    },
  ]


  const addItem = () => {
    setVisible(!visible)
  }


  const cancelAdd = () => {
    console.log(123)
    setVisible(!visible)
  }

  useEffect(() => {
    console.log(userId);

  }, [userId])

  return (
    <div className={styles["home"]}>
      <div className={styles["content"]}>
        <div className={styles["table-header"]}>
          <Button
            //onClick={this.handleAdd}
            type="primary"
            className={styles["table-btn"]}
            onClick={addItem}
          >
            添加项目
          </Button>
        </div>
        <div className={styles["modal"]}>
          <Modal
            title="确认订单"
            onCancel={cancelAdd}
            visible={visible}
            footer={null}
          >
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              //onFinish={this.onFinish}
              layout="horizontal"
              size="center"
            >
              <Form.Item></Form.Item>
              <Form.Item label="收件人" name="name">
                <Input bordered="false" placeholder="请输入收件人姓名" />
              </Form.Item>
              <Form.Item label="电话号码" name="phonenumber">
                <Input
                  bordered="false"
                  placeholder="请输入电话号码"
                  minLength="11"
                />
              </Form.Item>
              <Form.Item label="地址" name="address"></Form.Item>
              <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary" htmlType="submit" block>
                  添加
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div className={styles["table-wraper"]}>
          <Table
            //rowClassName={() => 'editable-row'}
            bordered
            size="default"
            pagination={{
              total: 100,
              pageSizeOptions: [6, 10, 20, 30],
              defaultPageSize: pageSize,
              current: page,
              onChange: (page, pageSize) => {
                setPage(page), setPageSize(pageSize)
              },
            }}
            dataSource={data}
            columns={columns}
          />
        </div>
      </div>
    </div>
  )
}
