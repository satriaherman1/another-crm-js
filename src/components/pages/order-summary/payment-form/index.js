import Input from "@src/components/common/Input";
import Button from "@src/components/common/Button";
export default function OrderSummaryPaymentForm() {
    return (<form action="" className="mt-2">
      <section className="block">
        <Input type="text" placeholder="Enter your credit number" className="w-full box-border md:box-content"/>
      </section>

      <section className="flex gap-x-5 flex flex-col">
        <Input type="text" placeholder="Expiring MM/YY" className="md:w-[35%]"/>
        <Input type="text" placeholder="CVV Code" className="md:w-[35%]"/>
      </section>
      <section className="flex gap-x-5">
        <Input type="text" placeholder="Zip Code" className="md:w-[35%] w-full"/>
      </section>

      <Button className="w-full mt-9 md:box-content" variant="primary">
        Upgrade
      </Button>
    </form>);
}
