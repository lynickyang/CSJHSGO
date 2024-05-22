import{M as y}from"./modal-IVpuTcq9.js";import{_ as k,o as p,b as h,d as t,t as i,w as u,v as m,y as P,r as b,F as M,m as x,u as f,g as N}from"./index-6fCE9rst.js";const C={props:{product:{type:Object,default(){return{}}},isNew:""},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{showModal(){console.log("開啟ＭＯＤＡＬ"),this.modal.show()},hideModal(){console.log("關閉ＭODLE"),this.modal.hide()}},mounted(){this.modal=new y(this.$refs.modal)}},D={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true",ref:"modal"},V={class:"modal-dialog modal-dialog-centered"},B={class:"modal-content"},U={class:"modal-header"},F={class:"modal-title fs-5",id:"staticBackdropLabel"},L={class:"modal-body"},T={class:"form-floating mb-3"},$=t("label",{for:"name"},"名稱",-1),O={class:"form-floating mb-3"},S=t("label",{for:"floatingTextarea2"},"描述",-1),j={class:"form-floating mb-3"},q=t("label",{for:"image"},"照片網址",-1),z={class:"modal-footer"};function A(_,o,a,r,e,d){return p(),h("div",D,[t("div",V,[t("div",B,[t("div",U,[t("h1",F,i(a.isNew?"新增":"編輯"),1),t("button",{onClick:o[0]||(o[0]=(...l)=>d.hideModal&&d.hideModal(...l)),type:"button",class:"btn-close"})]),t("div",L,[t("form",null,[u(t("input",{type:"hidden",name:"id","onUpdate:modelValue":o[1]||(o[1]=l=>e.tempProduct.id=l)},null,512),[[m,e.tempProduct.id]]),t("div",T,[u(t("input",{class:"form-control",type:"text",id:"name",placeholder:"名稱","onUpdate:modelValue":o[2]||(o[2]=l=>e.tempProduct.name=l)},null,512),[[m,e.tempProduct.name]]),$]),t("div",O,[u(t("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2","onUpdate:modelValue":o[3]||(o[3]=l=>e.tempProduct.description=l),style:{height:"100px"}},null,512),[[m,e.tempProduct.description]]),S]),t("div",j,[u(t("input",{class:"form-control",type:"text",id:"image",placeholder:"照片網址","onUpdate:modelValue":o[4]||(o[4]=l=>e.tempProduct.image=l)},null,512),[[m,e.tempProduct.image]]),q])])]),t("div",z,[t("button",{onClick:o[5]||(o[5]=(...l)=>d.hideModal&&d.hideModal(...l)),type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 "),t("button",{type:"submit",onClick:o[6]||(o[6]=l=>_.$emit("update-product",e.tempProduct)),class:"btn btn-primary"},i(a.isNew?"新增":"更新"),1)])])])],512)}const E=k(C,[["render",A]]),G={class:"container-lg"},H={class:"text-end mt-5 mb-4"},I={class:"table table-hover"},J=t("thead",null,[t("tr",null,[t("th",{width:"10%",scope:"col-md-1"},"#"),t("th",{width:"20%",scope:"col-md-4"},"植物中文"),t("th",{width:"50%",scope:"col-md-4"},"植物描述"),t("th",{width:"20%",scope:"col-md-3"},"功能")])],-1),K={scope:"row"},Q=["onClick"],R=["onClick"],Y={__name:"CreateView",setup(_){const o=P(),a=b(null);let r=b(!1),e=b({});function d(s,c){console.log("檢查傳入值isNew",s),s===!0?(console.log("呼叫新增",e.vulue),e.value={}):(console.log("呼叫編輯"),e.value={...c},console.log("顯示tempProduct:",e.value)),r.value=s,a.value.showModal()}function l(s){r.value==!0?(console.log("觸發更新傳入的值：",s),e.value=s,console.log("設定temp為傳入的值",e),o.addData(s)):(console.log("更新模式"),o.editData(s,s.id)),a.value.hideModal()}function g(s){o.deletData(s)}return(s,c)=>(p(),h("div",G,[t("div",H,[t("button",{class:"btn btn-primary",type:"button",onClick:c[0]||(c[0]=n=>d(!0))}," 新增項目 ")]),t("table",I,[J,t("tbody",null,[(p(!0),h(M,null,x(f(o).products,(n,v)=>(p(),h("tr",{class:"table align-middle",key:v+1},[t("th",K,i(v+1),1),t("td",null,i(n.name),1),t("td",null,i(n.description),1),t("td",null,[t("button",{class:"btn btn-outline-primary m-1",onClick:w=>d(!1,n)},"編輯",8,Q),t("button",{class:"btn btn-outline-danger",onClick:w=>g(n.id)},"刪除",8,R)])]))),128))])]),N(E,{ref_key:"productModal",ref:a,product:f(e),isNew:f(r),onUpdateProduct:l},null,8,["product","isNew"])]))}};export{Y as default};
