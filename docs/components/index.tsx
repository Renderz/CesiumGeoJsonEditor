import { Form, Input } from 'antd';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item name="geojson" label="GeoJSON">
        <Input />
      </Form.Item>
    </Form>
  );
};
