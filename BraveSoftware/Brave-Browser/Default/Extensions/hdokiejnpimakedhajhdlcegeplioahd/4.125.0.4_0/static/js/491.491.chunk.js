(self.webpackChunkwebClient=self.webpackChunkwebClient||[]).push([[491],{14781:function(e,n,t){"use strict";t.r(n);var o=t(37755),i=(t(23381),t(82325)),c=t(2377),r=t(73047),a=t(27403),u={id:0,type:"GenerateStrongPassword",visible:!0,completed:null,seenAt:null,color:c.a.BLUE},l={complete:jest.fn(),hideExpandedSkillInDrawer:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",(function(){return{useSecondaryOnboardingActions:function(){return l}}})),jest.mock("react-redux",(function(){return(0,o.Z)((0,o.Z)({},jest.requireActual("react-redux")),{},{useSelector:jest.fn().mockReturnValueOnce({settings:{features:{new_infield_design_for_onboarding:!1}}})})}));var s=function(e){return(0,i.mount)((0,a.jsx)(r.default,{skill:e,expanded:!0,fromAllSkillsDialog:!1}))};it("should render the GenerateStrongPassword component without crashing",(function(){var e=s(u);expect(e).toHaveLength(1)})),top.ext={},it('should invoke the complete function after strong password generated and "All set" CTA clicked',(function(){var e=s(u);e.find("input.password-input").simulate("click"),e.find(".action button.cta").simulate("click"),e.find("button.action-cta").simulate("click"),e.unmount(),expect(l.complete).toHaveBeenCalled(),expect(l.hideExpandedSkillInDrawer).toHaveBeenCalled()}))},32668:function(){},45503:function(){},14013:function(){},98673:function(){}}]);