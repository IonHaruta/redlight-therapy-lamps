export type PaynetRegisterResponse = {
  checkoutPostUrl: string;
  fields: {
    operation: string;
    LinkUrlSucces: string;
    LinkUrlCancel: string;
    ExpiryDate: string;
    Signature: string;
    Lang: string;
  };
};

/** POST redirect to Paynet acquiring UI (field name typo LinkUrlSucces is required by gateway). */
export function redirectPostToPaynet(data: PaynetRegisterResponse): void {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = data.checkoutPostUrl;
  form.style.display = "none";

  const add = (name: string, value: string) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };

  add("operation", data.fields.operation);
  add("LinkUrlSucces", data.fields.LinkUrlSucces);
  add("LinkUrlCancel", data.fields.LinkUrlCancel);
  add("ExpiryDate", data.fields.ExpiryDate);
  add("Signature", data.fields.Signature);
  add("Lang", data.fields.Lang);

  document.body.appendChild(form);
  form.submit();
}
