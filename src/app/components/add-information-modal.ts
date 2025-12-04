import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-information-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      (click)="onOverlayClick($event)"
    >
      <div
        class="bg-white rounded w-full max-w-[767px] max-h-[90vh] flex flex-col"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between px-[20px] py-[16px] flex-shrink-0"
        >
          <h2 class="text-[22px] font-medium text-[#3F4254]">
            Add Information
          </h2>
          <button
            (click)="onClose()"
            class="w-[18px] h-[18px] flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_437_8161)">
                <path
                  d="M0.929495 18C0.692391 18 0.455286 17.9099 0.275141 17.7284C-0.0865054 17.3667 -0.0865054 16.7804 0.275141 16.4187L16.4227 0.271235C16.7843 -0.0904116 17.3706 -0.0904116 17.7323 0.271235C18.0939 0.632881 18.0939 1.2192 17.7323 1.58107L1.58498 17.7284C1.40348 17.9087 1.16637 18 0.929495 18Z"
                  fill="#3F4254"
                />
                <path
                  d="M17.0781 18C16.841 18 16.6042 17.9099 16.4238 17.7284L0.275141 1.58107C-0.0865054 1.2192 -0.0865054 0.632881 0.275141 0.271235C0.636787 -0.0904116 1.22311 -0.0904116 1.58498 0.271235L17.7323 16.4187C18.0939 16.7804 18.0939 17.3667 17.7323 17.7284C17.5508 17.9087 17.3139 18 17.0781 18Z"
                  fill="#3F4254"
                />
              </g>
              <defs>
                <clipPath id="clip0_437_8161">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <!-- Scrollable Body -->
        <div class="flex-1 overflow-y-auto px-[20px] pb-6">
          <div class="space-y-[30px]">
            <!-- Profile Image Upload -->
            <div class="flex justify-center">
              <div class="relative">
                <div
                  class="w-[120px] h-[120px] rounded-full border-2 border-[#8B8B8B] overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  (click)="profileImageInput.click()"
                >
                  <img
                    *ngIf="profileImagePreview"
                    [src]="profileImagePreview"
                    alt="Profile"
                    class="w-full h-full object-cover"
                  />
                  <svg
                    *ngIf="!profileImagePreview"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.5 10.5H41.925C41.235 9.06 39.75 8.25 38.25 8.25H21.75C20.25 8.25 18.765 9.06 18.075 10.5H10.5C8.295 10.5 6.5025 12.3 6.5025 14.505L6.5 45.495C6.5 47.7 8.295 49.5 10.5 49.5H49.5C51.705 49.5 53.5 47.7 53.5 45.495V14.505C53.5 12.3 51.705 10.5 49.5 10.5ZM30 41.25C23.925 41.25 19 36.315 19 30.24C19 24.165 23.925 19.23 30 19.23C36.075 19.23 41 24.165 41 30.24C41 36.315 36.075 41.25 30 41.25Z"
                      fill="#62768F"
                    />
                    <path
                      d="M30 23.25C26.13 23.25 23 26.38 23 30.25C23 34.12 26.13 37.25 30 37.25C33.87 37.25 37 34.12 37 30.25C37 26.38 33.87 23.25 30 23.25Z"
                      fill="#62768F"
                    />
                  </svg>
                </div>
                <button
                  type="button"
                  class="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#009FD8] flex items-center justify-center shadow-md hover:bg-[#0385b5] transition-colors"
                  (click)="profileImageInput.click()"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.4296 10.537C9.3176 10.537 9.2059 10.494 9.1203 10.409C8.9495 10.238 8.9495 9.961 9.1203 9.790L15.9571 2.953C16.1278 2.782 16.4049 2.782 16.5758 2.953C16.7466 3.124 16.7466 3.401 16.5758 3.572L9.7389 10.409C9.6536 10.494 9.5416 10.537 9.4296 10.537Z"
                      fill="white"
                      transform="scale(0.5) translate(-10, -2)"
                    />
                    <path
                      d="M8.7543 13.688C8.7239 13.688 8.6931 13.684 8.6622 13.678C8.426 13.627 8.2755 13.394 8.3262 13.158L9.0022 10.008C9.0529 9.771 9.2866 9.621 9.5217 9.672C9.758 9.722 9.9085 9.955 9.8577 10.191L9.1818 13.342C9.1378 13.547 8.9562 13.688 8.7543 13.688Z"
                      fill="white"
                      transform="scale(0.5) translate(-10, -2)"
                    />
                    <path
                      d="M11.9042 13.012C11.7922 13.012 11.6805 12.969 11.5949 12.883C11.4241 12.713 11.4241 12.436 11.5949 12.265L18.4317 5.428C18.6024 5.257 18.8795 5.257 19.0504 5.428C19.2212 5.599 19.2212 5.876 19.0504 6.047L12.2138 12.883C12.1282 12.969 12.0162 13.012 11.9042 13.012Z"
                      fill="white"
                      transform="scale(0.5) translate(-10, -2)"
                    />
                    <path
                      d="M8.7536 13.687C8.5517 13.687 8.3704 13.547 8.3262 13.342C8.2757 13.105 8.4259 12.873 8.6622 12.822L11.8128 12.146C12.0493 12.096 12.2818 12.246 12.3324 12.482C12.3829 12.718 12.2326 12.951 11.9964 13.002L8.8457 13.678C8.8149 13.684 8.784 13.687 8.7536 13.687Z"
                      fill="white"
                      transform="scale(0.5) translate(-10, -2)"
                    />
                  </svg>
                </button>
                <input
                  #profileImageInput
                  type="file"
                  accept="image/*"
                  class="hidden"
                  (change)="onProfileImageSelected($event)"
                />
              </div>
            </div>

            <!-- Title and Floor Plan For Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-[31px]">
              <!-- Title Field -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2"
                  >Title</label
                >
                <input
                  type="text"
                  [(ngModel)]="formData.title"
                  placeholder="Enter Title"
                  class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base font-medium focus:outline-none focus:border-[#009FD8] transition-colors"
                />
              </div>

              <!-- Floor Plan For Field -->
              <div>
                <label class="block text-base font-medium text-[#212529] mb-2"
                  >Floor Plan For</label
                >
                <div class="relative">
                  <select
                    [(ngModel)]="formData.floorPlanFor"
                    class="w-full h-[50px] px-5 pr-10 border-2 border-[#E9EBEC] rounded text-base appearance-none focus:outline-none focus:border-[#009FD8] transition-colors"
                    [class.text-[#C2C3CB]]="!formData.floorPlanFor"
                    [class.text-[#212529]]="formData.floorPlanFor"
                  >
                    <option value="" disabled selected hidden>
                      Please Select
                    </option>
                    <option value="mobile">Mobile</option>
                    <option value="desktop">Desktop</option>
                    <option value="both">Both</option>
                  </select>
                  <div
                    class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <svg
                      width="9"
                      height="5"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.19591 0.19323C8.45626 -0.0642735 8.87837 -0.0642735 9.13872 0.19323C9.39907 0.450734 9.39907 0.868231 9.13872 1.12574L5.13872 5.08202C4.88634 5.33165 4.47995 5.34038 4.21683 5.10183L0.216835 1.47524C-0.0545782 1.22916 -0.0729126 0.81206 0.175882 0.543613C0.424676 0.275167 0.846388 0.257032 1.1178 0.503108L4.64727 3.70309L8.19591 0.19323Z"
                        fill="#434349"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Type Radio Buttons -->
            <div class="flex items-center gap-[95px]">
              <label class="flex items-center gap-[10px] cursor-pointer group">
                <div class="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="type"
                    value="Standard"
                    [(ngModel)]="formData.type"
                    class="appearance-none w-5 h-5 border border-[#CED4DA] rounded-full bg-[#FEFEFE] cursor-pointer checked:border-[#CED4DA] peer"
                  />
                  <div
                    class="absolute w-2.5 h-2.5 rounded-full bg-[#049AD0] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                  ></div>
                </div>
                <span class="text-base font-medium text-[#212529]"
                  >Standard</span
                >
              </label>
              <label class="flex items-center gap-[10px] cursor-pointer group">
                <div class="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="type"
                    value="External"
                    [(ngModel)]="formData.type"
                    class="appearance-none w-5 h-5 border border-[#CED4DA] rounded-full bg-[#FEFEFE] cursor-pointer checked:border-[#CED4DA] peer"
                  />
                  <div
                    class="absolute w-2.5 h-2.5 rounded-full bg-[#049AD0] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                  ></div>
                </div>
                <span class="text-base font-medium text-[#212529]"
                  >External</span
                >
              </label>
            </div>

            <!-- URL Field (shown only for External type) -->
            <div *ngIf="formData.type === 'External'">
              <label class="block text-base font-medium text-[#212529] mb-2"
                >URL</label
              >
              <input
                type="url"
                [(ngModel)]="formData.url"
                placeholder="Enter Location"
                class="w-full h-[50px] px-5 border-2 border-[#E9EBEC] rounded placeholder:text-[#C2C3CB] text-base focus:outline-none focus:border-[#009FD8] transition-colors"
              />
            </div>

            <!-- Featured Images -->
            <div>
              <label class="block text-base font-medium text-[#212529] mb-2"
                >Featured Images</label
              >
              <div
                class="border border-dashed border-[#B9BBBC] rounded h-[120px] flex flex-col items-center justify-center cursor-pointer hover:border-[#009FD8] transition-colors"
                (click)="featuredImagesInput.click()"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mb-2"
                >
                  <path
                    d="M25.0037 27.6419H19.8316H18.4389H18.1381V20.7045H20.407C20.9824 20.7045 21.3224 20.0506 20.9824 19.5798L16.5689 13.4727C16.2877 13.0804 15.7058 13.0804 15.4246 13.4727L11.011 19.5798C10.671 20.0506 11.0045 20.7045 11.5864 20.7045H13.8553V27.6419H13.5546H12.1618H6.16592C2.73314 27.4523 0 24.2418 0 20.7633C0 18.3636 1.30119 16.2713 3.23008 15.1401C3.05354 14.6628 2.96199 14.1528 2.96199 13.6166C2.96199 11.1646 4.9432 9.18341 7.39518 9.18341C7.92481 9.18341 8.43482 9.27495 8.91214 9.45149C10.331 6.44373 13.3911 4.35791 16.9481 4.35791C21.5513 4.36445 25.3437 7.88876 25.7752 12.3808C29.3126 12.9889 32 16.2647 32 19.9721C32 23.9345 28.9138 27.3673 25.0037 27.6419Z"
                    fill="#878A99"
                  />
                </svg>
                <p class="text-base font-medium text-[#212529]">
                  Drop Images here or click to upload.
                </p>
                <input
                  #featuredImagesInput
                  type="file"
                  accept="image/*"
                  multiple
                  class="hidden"
                  (change)="onFeaturedImagesSelected($event)"
                />
              </div>
              <div
                *ngIf="formData.featuredImages.length > 0"
                class="mt-2 flex flex-wrap gap-2"
              >
                <span
                  *ngFor="let img of formData.featuredImages"
                  class="text-sm text-[#212529] bg-gray-100 px-2 py-1 rounded"
                  >{{ img }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div
          class="flex items-center justify-end gap-4 px-[26px] py-5 flex-shrink-0"
        >
          <button
            (click)="onClose()"
            class="flex items-center gap-2 h-9 px-[17px] rounded bg-[#DEE1EB] text-[#4C546C] font-semibold text-base hover:bg-[#d0d3df] transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_437_8177)">
                <path
                  d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563682 11.5778 -0.0563682 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z"
                  fill="#4C546C"
                />
                <path
                  d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563682 0.8128 -0.0563682 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816707 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z"
                  fill="#4C546C"
                />
              </g>
              <defs>
                <clipPath id="clip0_437_8177">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Close</span>
          </button>
          <button
            (click)="onSave()"
            class="flex items-center gap-2 h-9 px-[18px] rounded bg-[#009FD8] text-white font-semibold text-base hover:bg-[#0385b5] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7432 3.76582C14.0231 4.01076 14.0485 4.43749 13.7995 4.71384L6.79025 12.4937C6.53996 12.7715 6.11021 12.7892 5.83796 12.5329L1.78194 8.7145C1.529 8.47637 1.50478 8.07957 1.7218 7.8083C1.96127 7.50897 2.40721 7.46777 2.6922 7.7241L5.83913 10.5547C6.11261 10.8007 6.53366 10.7787 6.78005 10.5056L12.8091 3.82096C13.053 3.55046 13.4691 3.52594 13.7432 3.76582Z"
                fill="white"
              />
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class AddInformationModalComponent {
  @Input() isOpen = false;
  @Input() editMode = false;
  @Input() set informationData(data: any) {
    if (data) {
      this.formData = {
        title: data.title || "",
        floorPlanFor: data.floorPlanFor || "",
        type: data.type || "Standard",
        url: data.url || "",
        description: data.description || "",
        profileImage: data.profileImage || "",
        featuredImages: data.featuredImages || [],
      };
      this.profileImagePreview = data.profileImage || "";
    }
  }
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  formData = {
    title: "",
    floorPlanFor: "",
    type: "Standard",
    url: "",
    description: "",
    profileImage: "",
    featuredImages: [] as string[],
  };

  profileImagePreview: string = "";

  onClose() {
    this.resetForm();
    this.close.emit();
  }

  onSave() {
    if (this.validateForm()) {
      this.save.emit(this.formData);
      this.resetForm();
    }
  }

  onOverlayClick(event: MouseEvent) {
    this.onClose();
  }

  onProfileImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.formData.profileImage = file.name;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onFeaturedImagesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const fileNames = Array.from(input.files).map((file) => file.name);
      this.formData.featuredImages = [
        ...this.formData.featuredImages,
        ...fileNames,
      ];
    }
  }

  validateForm(): boolean {
    if (!this.formData.title.trim()) {
      alert("Please enter a title");
      return false;
    }
    if (!this.formData.floorPlanFor) {
      alert("Please select floor plan for");
      return false;
    }
    if (!this.formData.type) {
      alert("Please select a type");
      return false;
    }
    return true;
  }

  resetForm() {
    this.formData = {
      title: "",
      floorPlanFor: "",
      type: "Standard",
      url: "",
      description: "",
      profileImage: "",
      featuredImages: [],
    };
    this.profileImagePreview = "";
  }
}
