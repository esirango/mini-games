import { create } from "zustand";

export interface insidePanelState {
    replyCommentId: any;
    setReplyCommentId: (value: any) => void;
    isReplyComment: any;
    setIsReplyComment: (value: any) => void;
    editReviewData: any;
    setEditReviewData: (value: []) => void;
    isEditComment: any;
    setIsEditComment: (value: any) => void;
    hasComment: any;
    setHasComment: (value: any) => void;
    departmentID: any;
    setDepartmentID: (value: any) => void;
    haveTicketFile: boolean;
    setHaveTicketFile: (value: boolean) => void;
    isLoadingTicketAttachment: boolean;
    setIsLoadingTicketAttachment: (value: boolean) => void;
    haveResumeFile: boolean;
    setHaveResumeFile: (value: boolean) => void;
    teacherCoverImg: any;
    setTeacherCoverImg: (value: any) => void;
}

const useInsidePanelState = create<insidePanelState>((set) => ({
    replyCommentId: null,
    setReplyCommentId(value) {
        set((state) => ({
            replyCommentId: (state.replyCommentId = value),
        }));
    },
    isReplyComment: false,
    setIsReplyComment(value) {
        set((state) => ({
            isReplyComment: (state.isReplyComment = value),
        }));
    },
    editReviewData: [],
    setEditReviewData(value) {
        set((state) => ({
            editReviewData: (state.editReviewData = value),
        }));
    },
    isEditComment: false,
    setIsEditComment(value) {
        set((state) => ({
            isEditComment: (state.isEditComment = value),
        }));
    },
    hasComment: false,
    setHasComment(value) {
        set((state) => ({
            hasComment: (state.hasComment = value),
        }));
    },
    departmentID: "all",
    setDepartmentID(value) {
        set((state) => ({
            departmentID: (state.departmentID = value),
        }));
    },
    haveTicketFile: false,
    setHaveTicketFile(value) {
        set((state) => ({
            haveTicketFile: (state.haveTicketFile = value),
        }));
    },
    isLoadingTicketAttachment: false,
    setIsLoadingTicketAttachment(value) {
        set((state) => ({
            isLoadingTicketAttachment: (state.isLoadingTicketAttachment =
                value),
        }));
    },
    haveResumeFile: false,
    setHaveResumeFile(value) {
        set((state) => ({
            haveResumeFile: (state.haveResumeFile = value),
        }));
    },
    teacherCoverImg: null,
    setTeacherCoverImg(value) {
        set((state) => ({
            teacherCoverImg: (state.teacherCoverImg = value),
        }));
    },
}));

export default useInsidePanelState;
