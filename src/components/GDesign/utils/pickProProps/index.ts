const proFieldProps = `valueType request plain renderFormItem render text formItemProps valueEnum`

const proFormProps = `fieldProps isDefaultDom groupProps contentRender submitterProps submitter`

export default function pickProProps(props: RecordType) {
  const propList = `${proFieldProps} ${proFormProps}`.split(/[\s\n]+/)

  const attrs = {}
  Object.keys(props || {}).forEach((key) => {
    if (propList.includes(key)) {
      return
    }
    attrs[key] = props[key]
  })
  return attrs
}
