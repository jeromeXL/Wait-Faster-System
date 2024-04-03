from beanie import Document, PydanticObjectId
from datetime import datetime
from typing import List, Optional
from enum import Enum
from pydantic import Field
from models.order import OrderStatus


class SessionStatus(Enum):
    OPEN = 0
    AWAITING_PAYMENT = 1
    CLOSED = 2


class Session(Document):
    status: SessionStatus
    orders: List[PydanticObjectId] = []
    session_start_time: str
    session_end_time: Optional[str] = Field(default=None)
