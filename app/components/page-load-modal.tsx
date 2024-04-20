import React, { useEffect, useState } from 'react'

import { IModalHandler, ModalManager, TemplateCollection } from '@/utils/modal'
import { CustomModal } from './modals/custom-modal'
import PreWarningModal from './pre-warning-modal'

const PageLoadModal = () => {
  enum ModalType {
    preWarning = 'preWarning',
  }

  const [ModalModel, setModalModel] = useState<IModalHandler>({
    visibility: false,
    title: '',
    content: '',
  })

  const modalTemplateCollection: TemplateCollection = {
    preWarning: {
      title: 'We are upgrading our servers',
      visibility: true,
      content: () => <PreWarningModal onClose={() => modal.dismissModal()} />,
    },
  }

  const modal = new ModalManager(setModalModel, modalTemplateCollection)

  useEffect(() => {
    const openPageLoad = () => {
      modal.dismissModal()
      modal.createModal(ModalType.preWarning)
    }

    const timer = setTimeout(() => {
      openPageLoad()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {ModalModel.visibility && (
        <CustomModal
          onClose={() => {
            modal.dismissModal()
          }}
          title={ModalModel.title as string}
        >
          {ModalModel.content}
        </CustomModal>
      )}
    </>
  )
}

export default PageLoadModal
