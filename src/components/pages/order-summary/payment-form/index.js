import Input from "@src/components/common/Input";
import Button from "@src/components/common/Button";
export default function OrderSummaryPaymentForm() {
    return (<form action="" className="mt-2 w-full">
      <section className="flex w-full">
        <Input type="text" placeholder="Expiring MM/YY" className="w-full" isNoMaxWidth/>
      </section>

      <section className="w-full flex gap-x-5 flex flex-col md:flex-row">
        <Input type="text" placeholder="Expiring MM/YY" className="md:w-1/2" isNoMaxWidth/>
        <Input type="text" placeholder="CVV Code" className="md:w-[50% - 30px]" isNoMaxWidth/>
      </section>

      <section className="flex gap-x-5">
        <Input type="text" placeholder="Zip Code" className="md:w-1/2 w-full " isNoMaxWidth/>
      </section>

      <Button className="w-full mt-9 md:box-content" variant="primary">
        Upgrade
      </Button>
    </form>);
}
