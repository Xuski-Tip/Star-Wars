import UiLoading from "./UiLoading";
import UiButton from "./UiLoading";
export default {
    title: 'Ui-kit/UiLoading',
    component: UiButton
}
const Template = (args) => <UiLoading {...args} />;

const props = {
    theme: 'black',
    isShadow: false,
    classes: ''
}

export const Black = Template.bind({});

Black.args = {
  ...props, 
  theme: 'black'
};
export const White = Template.bind({});

White.args = {
  ...props, 
  theme: 'white',
  isShadow: true,
};
export const  Blue = Template.bind({});

Blue.args = {
  ...props, 
  theme: 'blue'
};