import Slider from 'material-ui/Slider'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(Slider, ({
  input: { onDragStart, onChange, name, value },
  onChange: onChangeFromField,
  defaultValue,
  meta,
  onChangeCustom,
  ...props
}) => ({
  // eslint-disable-line no-unused-vars
  ...props,
  name,
  value,
  onChange: (event, value) => {
    onChangeCustom ? onChangeCustom(event, value, onChange) : onChange(value)
    if (onChangeFromField) {
      onChangeFromField(value)
    }
  }
}))
