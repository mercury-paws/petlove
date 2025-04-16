import css from "./HomePage.module.css";
import image47 from '../../assets/img/homePage/image-47.jpg';

export default function HomePage() {
    return (
      <>
        <div className="flex flex-row justify-between items-end flex-wrap pt-[80px] bg-(--orange) rounded-br-[60px] rounded-bl-[60px] px-[64px] pb-[34px] gap-y-8">
          
          <h2 className="text-[90px]/[0.97] font-bold tracking-tight max-w-[760px] text-(--white)">Take good <span className="text-[var(--beige)]">care</span> of your small pets</h2>
          
          <p className="text-[18px]/[1.22] font-medium tracking-tight max-w-[255px] text-(--white)" >Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.</p>

      </div>
      <div className="rounded-br-[60px] rounded-bl-[60px]">
         <img
                  src={image47}
                  alt="person kissing the dog"
                  className="rounded-[60px]"
                />
      </div>
    </>
  );
}