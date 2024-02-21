"use client";
import {
  BaseContainer,
  BaseLink,
  BaseButton,
  SubtTitleTypo,
} from "@components/BaseComponents";

const TenantLandlordOption = ({ handleBtnOnClick, isActive, btnType }) => {
  return (
    <BaseContainer className="tenant-landlord-option">
      <BaseLink href="/">
        <BaseButton
          variant={btnType.tenant}
          className={`tenant-landlord-btn ${isActive.tenant}`}
          color="primary"
          data-value="tenant"
          onClick={handleBtnOnClick}
        >
          <SubtTitleTypo variant="h2">Tenant</SubtTitleTypo>
        </BaseButton>
      </BaseLink>
      <BaseLink href="/landlord">
        <BaseButton
          variant={btnType.landlord}
          className={`tenant-landlord-btn ${isActive.landlord}`}
          color="primary"
          data-value="landlord"
          onClick={handleBtnOnClick}
        >
          <SubtTitleTypo variant="h2">Landlord</SubtTitleTypo>
        </BaseButton>
      </BaseLink>
    </BaseContainer>
  );
};

export default TenantLandlordOption;
