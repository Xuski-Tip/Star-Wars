import UiButton from "./UiButton";
export default {
    title: 'Ui-kit/UiButton',
    component: UiButton
}
const Template = (args) => <UiButton {...args} />;

const props = {
    text:"hello",
    onClick: () => console.log('hello'),
    disabled: false,
    theme:'light',
    classes: '',
}

export const Light = Template.bind({});

Light.args = {
  ...props, 
  theme: 'light'
};
export const Dark = Template.bind({});

Dark.args = {
    ...props, 
    theme: 'dark'
};
export const Disables = Template.bind({});

Disables.args = {
    ...props, 
    disabled: true
};